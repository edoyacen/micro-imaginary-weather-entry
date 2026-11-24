// This entry writes the forecast for the weather in a city that isn't to the marked output directory, as plain text.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const answer = `Gloom City: light drizzle of regret, clearing briefly around lunch, then low cloud of unfinished paperwork.`;
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to entry.txt`);
