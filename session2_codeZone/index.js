import * as fs from "node:fs";
// // Reading a file:
// // const fileContent = fs.readFileSync("./hello.txt", "utf-8");
// // console.log(fileContent);

// fs.readFile("./hello.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log("error reading file", err);
//   } else {
//     console.log("File content", data);
//   }
// });
// // Writing to a file:
// fs.writeFile(
//   "./users.json",
//   JSON.stringify([{ id: 1, name: "ahmed" }]),
//   "utf8",
//   (err) => {
//     if (err) {
//       console.log("Error");
//     }
//     console.log("Done");
//   },
// );

// Deleting a file:
// fs.unlink("./users.json", (err) => {
//   if (err) {
//     console.log("error");
//   }
//   console.log("done");
// });

// Data Stream (readable - writable):
// const rStream = fs.createReadStream("./hello.txt", "utf8");
// const wStream = fs.createWriteStream("./stream.txt", "utf8");
// rStream.on("data", (chunk) => {
// console.log("========chunk========", chunk);
// wStream.write("\n ======chunk====== \n");
// wStream.write(chunk);
// });
//
