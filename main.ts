// The Long Roast: Lawmakers and the File They Cannot Convert
// One satirical sentence, at most 320 characters, written to /output/entry.txt.
// The program is deterministic: it always writes the same single sentence.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// v2 revision — tightened the setup ("spent the morning" instead of
// "spent his morning asking"), added one specific detail (the law is
// 400 pages long: the bulk of the rules vs. the one file he cannot
// convert), and kept the punch on the last words.
const ROAST =
  "The committee chair who decides what artificial intelligence is allowed to do spent the morning asking his staff how to save a PDF, then signed a 400-page law telling engineers how to save humanity.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ROAST, "utf8");

const chars = [...ROAST].length;
if (chars < 1 || chars > 320) {
  throw new Error(`entry is ${chars} characters, must be 1-320`);
}
console.log(`Wrote ${chars} characters to ${outPath}`);
