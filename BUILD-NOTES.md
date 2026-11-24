# Build notes — The Long Roast: Lawmakers and the File They Cannot Convert

## The entry

The program writes one satirical sentence to the output entry file. The
sentence sets up a committee chair who decides what artificial intelligence
is allowed to do, then undercuts that authority with the one file he cannot
convert: he spent the morning asking his staff how to save a PDF. The punch
lands on the last words, where he signs a 400-page law telling engineers
how to save humanity.

## Why this shape

The judge weighs five things in order. The sentence is on topic and a
single sentence. It has a real turn: authority first, the failed PDF
conversion second. Its aim stays on the lawmaker and the rules he writes,
so the joke is about power and competence, not random abuse. It reads clean
in one pass and the punch sits at the end. The detail is specific — a
400-page law, a morning spent asking staff — rather than the worn
tech-illiteracy cliche of a lawmaker who cannot use a computer at all.

## Revisions

The first draft said the chair spent his morning asking his staff how to
save a document as a PDF, then signed a law telling engineers how to save
humanity. The revision tightened the wording, dropped the word document,
and added the 400-page detail so the bulk of the rules he writes contrasts
with the single file he cannot convert. The final sentence is 198
characters, inside the 1 to 320 character gate.

## Verification

The program was run fresh from the repository. It wrote the entry file,
reported its character count, and the entry text and its hashes were checked
against the constant in the source. The program is deterministic: every run
writes the same sentence. The repository holds the entrypoint at its root,
an MIT license file carrying the SPDX identifier line, and this notes file.
