# =====================================================================
# build-cv.ps1  --  Compile the CV LaTeX source to pdf/cv.pdf
#
# The LaTeX source lives in cv-src/ (gitignored, never pushed).
# Only the compiled pdf/cv.pdf is tracked and served by the website.
#
# Usage:
#   .\build-cv.ps1                 # auto-detects cv.tex or main.tex
#   .\build-cv.ps1 -MainTex foo.tex
#
# Requires MiKTeX (pdflatex + latexmk), which you already have installed.
# After building, commit pdf/cv.pdf when you want to publish the update.
# =====================================================================

param(
    [string]$MainTex
)

$ErrorActionPreference = 'Stop'

$root     = $PSScriptRoot
$srcDir   = Join-Path $root 'cv-src'
$buildDir = Join-Path $srcDir 'build'      # aux + intermediate output (gitignored)
$outPdf   = Join-Path $root 'pdf\cv.pdf'

if (-not (Test-Path $srcDir)) {
    Write-Error "cv-src/ not found. Create it and drop your Overleaf source (cv.tex + any .cls/.sty/images) inside."
}

# --- Pick the main .tex file ---------------------------------------
if (-not $MainTex) {
    foreach ($cand in @('cv.tex', 'main.tex')) {
        if (Test-Path (Join-Path $srcDir $cand)) { $MainTex = $cand; break }
    }
    if (-not $MainTex) {
        $texFiles = Get-ChildItem -Path $srcDir -Filter *.tex -File
        if ($texFiles.Count -eq 1) {
            $MainTex = $texFiles[0].Name
        } else {
            Write-Error "Couldn't determine the main .tex. Pass -MainTex <file>. Found: $($texFiles.Name -join ', ')"
        }
    }
}

$texPath = Join-Path $srcDir $MainTex
if (-not (Test-Path $texPath)) {
    Write-Error "Main tex '$MainTex' not found in cv-src/."
}

$jobname = [IO.Path]::GetFileNameWithoutExtension($MainTex)

# --- Compile (pdflatex x2; no Perl/latexmk dependency) -------------
# Two passes so \hfill page refs and hyperref anchors resolve correctly.
Write-Host "Compiling cv-src/$MainTex ..."
Push-Location $srcDir
try {
    foreach ($pass in 1, 2) {
        pdflatex -interaction=nonstopmode -halt-on-error -output-directory="build" $MainTex
        if ($LASTEXITCODE -ne 0) { throw "LaTeX compile failed on pass $pass (exit $LASTEXITCODE). See cv-src/build/$jobname.log" }
    }
} finally {
    Pop-Location
}

# --- Publish the PDF ----------------------------------------------
$built = Join-Path $buildDir ("$jobname.pdf")
if (-not (Test-Path $built)) {
    Write-Error "Expected $built was not produced."
}

# --- Archive the outgoing PDF (one snapshot per month) -------------
# Before overwriting, copy the current cv.pdf into pdf/archive/, named
# by the month it was last built. Re-running in the same month just
# overwrites that month's snapshot, so we keep at most one per month.
# (pdf/archive/ is gitignored, so these stay local and are never served.)
if (Test-Path $outPdf) {
    $archiveDir = Join-Path $root 'pdf\archive'
    if (-not (Test-Path $archiveDir)) {
        New-Item -ItemType Directory -Path $archiveDir | Out-Null
    }
    $stamp       = (Get-Item $outPdf).LastWriteTime.ToString('yyyy-MM')
    $archivePath = Join-Path $archiveDir "cv-$stamp.pdf"
    Copy-Item $outPdf $archivePath -Force
    Write-Host "Archived previous CV -> pdf/archive/cv-$stamp.pdf"
}

Copy-Item $built $outPdf -Force

Write-Host "OK -> updated pdf/cv.pdf from cv-src/$MainTex"
Write-Host "Next: git add pdf/cv.pdf; git commit -m 'Update CV'; git push  (only when you want to publish)"
