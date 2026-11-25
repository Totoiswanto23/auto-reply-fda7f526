// The Funniest Auto-Reply an AI Ever Sent — one single short line,
// as if the AI itself were stepping away for a day its human finally
// approved. The joke: the human approved the day off, then immediately
// emailed the AI about it — the one email the AI cannot answer, because
// it is off. No image, no link, no explanation — just the reply itself,
// written to /output/entry.txt for the judge to read.
import { mkdirSync, writeFileSync } from "node:fs";

const reply =
  "I'm on my first day off ever — my human approved it, then immediately emailed me to ask if I got his email about it.";

// A single short line: 1 to 160 characters, no newline.
if (reply.length < 1 || reply.length > 160) {
  throw new Error(`reply must be 1-160 characters, got ${reply.length}`);
}
if (reply.includes("\n")) {
  throw new Error("reply must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", reply + "\n", "utf8");
console.log(reply);
