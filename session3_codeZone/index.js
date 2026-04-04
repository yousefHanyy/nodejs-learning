const crypto = require("node:crypto");

process.env.UV_THREADPOOL_SIZE = 5; // Increasing the threadpool to be 5 (remember the max is 1024 although you should treat the threads as your cores so it has to make sense)

crypto.pbkdf2("secret", "salt", 100000, 64, "sha512", () => {
  console.log("End of PBKDF2 ms", performance.now());
});
crypto.pbkdf2("secret", "salt", 100000, 64, "sha512", () => {
  console.log("End of PBKDF2 ms", performance.now());
});
crypto.pbkdf2("secret", "salt", 100000, 64, "sha512", () => {
  console.log("End of PBKDF2 ms", performance.now());
});
crypto.pbkdf2("secret", "salt", 100000, 64, "sha512", () => {
  console.log("End of PBKDF2 ms", performance.now());
});
// The default size of the thread pool is 4, so only 4 of these will run at the same time. The others will wait until one of the threads is free.
crypto.pbkdf2("secret", "salt", 100000, 64, "sha512", () => {
  console.log("End of PBKDF2 ms", performance.now());
});
//----------------------------------------------------------
fetch("https://dummyjson.com/products").then(() => {
  console.log("End of request ms", performance.now());
});
fetch("https://dummyjson.com/products").then(() => {
  console.log("End of request ms", performance.now());
});
fetch("https://dummyjson.com/products").then(() => {
  console.log("End of request ms", performance.now());
});
fetch("https://dummyjson.com/products").then(() => {
  console.log("End of request ms", performance.now());
});
fetch("https://dummyjson.com/products").then(() => {
  console.log("End of request ms", performance.now());
});
// Although these are also more than 4, they seem to have the same execution time. That is because this isn't managed by the thread pool but rather managed by the os kernels (differs from each os).This is where node.js shines, it shines in network based processes more than cpu related tasks.
