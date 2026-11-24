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

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), BIO, "utf8");
