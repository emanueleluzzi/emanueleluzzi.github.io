---
name: update-cv
description: >-
  Sync the website content into the CV LaTeX and rebuild the PDF. The website
  (config.js) is the source of truth; the CV (cv-src/cv.tex) is brought into
  line with it, then pdf/cv.pdf is regenerated so a single commit publishes the
  updated CV. Use when the user has added or changed presentations, conferences,
  seminars, papers, work-in-progress, discussions, or teaching on the website
  and wants the CV to catch up. CV-only material (awards, service, employment,
  education, skills) is left untouched.
---

# Update CV

Sync the website → CV, then rebuild the PDF. The website is updated often (new
presentations, venues, papers); the CV mirrors it plus extra detail the user
maintains by hand. This skill propagates the website's additions into the CV
**additively**, leaving the CV's hand-maintained sections alone.

## The two files

- **Source of truth:** [config.js](../../../config.js) — the `CONFIG` object holds
  all website content.
- **Target:** [cv-src/cv.tex](../../../cv-src/cv.tex) — the LaTeX CV. **This file is
  gitignored**, so there is no git history to recover from. Edit precisely and
  surface every change you make.
- **Build:** [build-cv.ps1](../../../build-cv.ps1) — compiles `cv-src/cv.tex` to
  `pdf/cv.pdf` (and archives the previous PDF monthly).

## What maps to what

| config.js field        | CV section (cv.tex)                                   |
|------------------------|-------------------------------------------------------|
| `papers[]`             | **Working Papers** (`\subsection*{title}` + abstract) |
| `workInProgress[]`     | **Working Papers** (same section, after papers)       |
| `papers/WIP.coauthors` | The `\textit{with} ...` author line — use **full names** |
| `papers/WIP.abstract`  | The abstract paragraph — mirror the website's wording |
| `papers/WIP.ssrn`      | An SSRN hyperlink on the paper (when non-empty)       |
| `papers/WIP.conference`| Per-paper *Presentations* / *Seminars* lines **and** the year-grouped **Conferences and Workshops** section |
| `discussions[]`        | **Discussions** (numbered `\item[{[n]}]` list)        |
| `teaching[]`           | **Teaching Experience**                               |
| `interests`            | **Research Interests** (usually already aligned)      |

## What is CV-only — DO NOT TOUCH

These sections live only in the CV and the user edits them by hand. Never add,
remove, or rewrite them based on the website: **Education, Awards, Service,
Other Employment, Miscellaneous (skills/languages/hobbies), References.**

## Sync rules

1. **Website wins, but additively.** Add what's on the website and missing from
   the CV (new presentation venues, a new paper, a new discussion, a new TA
   role). Update titles/coauthors/dates that changed on the website.
2. **Abstracts mirror the website.** The CV abstract should match the website's
   (shorter) abstract — the full, detailed abstracts live in the uploaded papers,
   not the CV. So when the website abstract differs from the CV's, update the CV
   to the website's wording (escaping LaTeX specials per rule 8).
3. **Use full coauthor names.** The website writes coauthors as full names
   (`"with Paul Schneider and Rohan Sen"`); fix the CV's author line to match
   (full names, e.g. `\textit{with} Paul Schneider, Rohan Sen`) rather than
   leaving initials.
4. **Sync the SSRN link.** When a paper has a non-empty `ssrn` (or `pdf`/`slides`)
   URL in config.js, add it to the CV as a hyperlink on that paper, e.g.
   `\href{<url>}{[SSRN]}` after the title or abstract. Match however the CV
   already presents links once one exists; remove a CV link if the website field
   is cleared.
5. **Don't auto-delete from the CV.** If something was removed or commented out on
   the website (e.g. a commented-out paper), leave it in the CV and mention it —
   the CV is the comprehensive record. Only remove on explicit instruction.
6. **Names differ between the two; match by meaning, not by string.** The same
   venue is written differently on each side, e.g. website
   `"Frontiers of Factor Investing 2026 (FoFi) - Lancaster University"` vs CV
   `University of Lancaster - Frontiers of Factor Investing (FoFi)`. Recognize
   these as the same item — do not duplicate. Follow the CV's existing phrasing
   style when adding a venue.
7. **Conference strings → year buckets.** The website `conference` field is one
   comma-separated string per paper, mixing conferences and seminars and usually
   carrying the year in the venue name. When adding to **Conferences and
   Workshops**, extract the year and place the venue under the matching
   `\item[YEAR:]` (separate multiple venues in a year with ` $\cdot$ `; create a
   new year item if needed, keeping years in descending order). "Brown-Bag" /
   internal venues (e.g. USI Lugano, SFI PhD Student Workshop) and invited
   seminars follow the CV's existing placement — seminars go on the paper's
   *Seminars* line, not the conference section.
8. **Escape LaTeX special characters** when copying text from config.js: `&` →
   `\&`, `%` → `\%`, `_` → `\_`, `#` → `\#`, `$` → `\$` (unless intentionally
   math), `~` and `^` as needed. (E.g. `S&P 500` → `S\&P 500`.)

## Steps

1. Read [config.js](../../../config.js) and [cv-src/cv.tex](../../../cv-src/cv.tex)
   fresh — don't rely on memory of past runs.
2. Walk each mapped section and build a list of differences, applying the sync
   rules above to decide what is an additive update vs. a CV-only detail vs. an
   ambiguous conflict to ask about.
3. **Show the user a short summary of the planned CV changes** before/while
   applying them (since cv.tex isn't in git). Apply them with precise `Edit`
   calls. If anything is ambiguous (rule 2/3), ask before changing it.
4. Build the PDF from the repo root:
   ```powershell
   .\build-cv.ps1
   ```
   If it fails, read the reported `cv-src/build/<jobname>.log` for the LaTeX
   error, fix the offending edit, and rebuild.
5. Report what changed and remind the user that committing `pdf/cv.pdf` (and the
   website files) will publish the updated CV:
   ```powershell
   git add pdf/cv.pdf config.js; git commit -m "Update CV"; git push
   ```

## Notes

- `cv-src/` and `pdf/archive/` are gitignored; only `pdf/cv.pdf` is served.
- Keep edits surgical — match the CV's existing LaTeX formatting (`\subsection*`,
  `\textit{Presentations}:`, the `description` lists) rather than reformatting.
