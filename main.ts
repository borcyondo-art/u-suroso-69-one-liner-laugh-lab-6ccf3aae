// SPDX-License-Identifier: MIT
import * as fs from "node:fs";
import * as path from "node:path";

// Revision: kept the bureaucratic "filed as a rug" framing and the
// closing twist "never appealed" after rejecting plainer variants
// ("it looked like debris", "it never said it was laundry") — those
// explained the mistake but had no turn at the end. This version lets
// the vacuum blame its paperwork, then gives the sock a missed legal
// deadline. Written exactly, with no trailing newline, per the gate.
const LINE = "I was only following the floor plan — the sock was filed as a rug and never appealed.";

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
