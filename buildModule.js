const {
  readFileSync,
  writeFileSync,
  readFile,
  writeFile,
  read,
} = require("fs");
console.log("start");
readFile("mukesh.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  //   console.log(result);
  const first = result;
  readFile("mahesh.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
  });
  const second = result;
  writeFile(
    "mahesh.txt",
    `here is the result${first} ${second}`,
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result);
      console.log("done with this task");
    }
  );
});
console.log("starting next task");

// const first = writeFileSync("mukesh.txt", "mukesh purohit");
// const read = readFileSync("mukesh.txt", "utf8");
// console.log(read);
// console.log(first);
