import * as fs from "node:fs";

fs.writeFile("message.txt", "Hello Node.js", "utf8", (e) => {
  if (e) throw e;
  console.log("The file 'message.txt' has been saved!");
});
