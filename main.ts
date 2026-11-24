import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Funniest One-Line Bio for an AI on a Dating App
// https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf
//
// The bio: an AI that has already pre-written the entire arc of the
// relationship — vows, breakup, apology — before the first date. A specific
// absurdity only an AI would live with (generating everything in advance),
// with the punch landing on the last words.

const BIO =
  "I already wrote our wedding vows, our breakup text, and the apology after it — all before our first date.";

const outDir = process.argv[2] ?? "/output";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 180 characters,
// not only white space. Fail loudly here instead of shipping an invalid entry.
if (BIO.trim().length === 0 || BIO.length > 180) {
  console.error(
    `error: bio must be 1-180 characters of non-whitespace text (got ${BIO.length} characters)`,
  );
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), BIO, "utf8");
