const { readFileSync, writeFileSync, readlinkSync } = require("fs");
console.log("start");
const first = readFileSync("first.txt", "utf-8");
const second = readFileSync("second.txt", "utf-8");

writeFileSync("mukesh.txt", `Here is the result : ${first} , ${second}`, {
  flag: "a",
});
console.log("done with the this taks");
console.log("starting the next one");
