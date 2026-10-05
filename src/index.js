#!/usr/bin/env node
const args = process.argv.slice(2);
const get = (flag, def) => {
  const i = args.indexOf(flag);
  return i > -1 && args[i + 1] ? args[i + 1] : def;
};

const topic = get("--topic", "content");
const platform = get("--platform", "shorts");
const tag = "#" + topic.replace(/\s+/g, "");

const platforms = {
  shorts: { tags: ["#shorts", "#viral"], time: "6-9 PM" },
  instagram: { tags: ["#reels", "#explore"], time: "11 AM-1 PM" },
  facebook: { tags: ["#fyp", "#trending"], time: "1-4 PM" },
};

const p = platforms[platform];
if (!p) {
  console.log("Platform: shorts | instagram | facebook");
  process.exit(1);
}

console.log(`Caption: ${topic} like you've never seen 👀`);
console.log(`Caption: Wait for it... ${topic} edition`);
console.log("Hashtags:", [tag, ...p.tags].join(" "));
console.log("Suggested time:", p.time, "(test it on your own audience)");
