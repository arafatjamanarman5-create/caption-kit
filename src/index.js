#!/usr/bin/env node
const args = process.argv.slice(2);
const get = (flag, def) => {
  const i = args.indexOf(flag);
  return i > -1 && args[i + 1] ? args[i + 1] : def;
};

const topic = get("--topic", "content");
const platform = get("--platform", "shorts");
const lang = get("--lang", "en");
const count = Math.min(parseInt(get("--count", "3"), 10) || 3, 5);
const tag = "#" + topic.replace(/\s+/g, "");

const platforms = {
  shorts: { tags: ["#shorts", "#viral"], time: "6-9 PM" },
  instagram: { tags: ["#reels", "#explore"], time: "11 AM-1 PM" },
  facebook: { tags: ["#fyp", "#trending"], time: "1-4 PM" },
};

const templates = {
  en: [
    "{topic} like you've never seen 👀",
    "Wait for it... {topic} edition",
    "Tell me you love {topic} without telling me",
    "This {topic} moment hits different 🔥",
    "POV: you're obsessed with {topic}",
  ],
  bn: [
    "{topic} নিয়ে এমন কিছু আগে দেখেননি 👀",
    "শেষ পর্যন্ত দেখুন... {topic} স্পেশাল 🔥",
    "{topic} ভালো লাগলে শেয়ার করুন ❤️",
    "আজকের {topic} মুহূর্ত, কেমন লাগলো?",
    "{topic} প্রেমীরা কমেন্টে জানান 👇",
  ],
};

const p = platforms[platform];
const list = templates[lang];
if (!p || !list) {
  console.log("Usage: --topic <text> --platform shorts|instagram|facebook --lang en|bn --count 1-5");
  process.exit(1);
}

[...list]
  .sort(() => Math.random() - 0.5)
  .slice(0, count)
  .forEach((t, i) => console.log(`Caption ${i + 1}: ${t.split("{topic}").join(topic)}`));

console.log("Hashtags:", [tag, ...p.tags].join(" "));
console.log("Suggested time:", p.time, "(test it on your own audience)");
