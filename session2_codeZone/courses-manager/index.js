import { Command } from "commander";
import inquirer from "inquirer";
import * as fs from "fs";
import { error } from "console";
import { json } from "stream/consumers";
const program = new Command();
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter the course title:",
  },
  {
    type: "input",
    name: "price",
    message: "Please enter the course price:",
  },
];
const filePath = "./courses.json";
program
  .name("courses-manager")
  .description("CLI to help with adding courses")
  .version("1.0.0");

program
  .command("add")
  .alias("a")
  .description("Add a course")

  .action(() => {
    inquirer.prompt(questions).then((answers) => {
      if (fs.existsSync(filePath)) {
        fs.readFile(filePath, "utf8", (err, fileContent) => {
          if (err) {
            console.log("Error", err);
            process.exit();
          }
          console.log(fileContent);
          const fileContentAsJson = JSON.parse(fileContent);
          fileContentAsJson.push(answers);
          fs.writeFile(
            filePath,
            JSON.stringify(fileContentAsJson),
            "utf8",
            () => {
              console.log("Done adding courses!");
            },
          );
        });
      } else {
        fs.writeFile(filePath, JSON.stringify([answers]), "utf8", () => {
          console.log("Done adding courses!");
        });
      }
    });
  });

program
  .command("list")
  .alias("l")
  .description("List all courses")
  .action(() => {
    fs.readFile(filePath, "utf8", (err, content) => {
      if (err) {
        console.log("Erorr: " + err);
        process.exit();
      }
      console.table(JSON.parse(content));
    });
  });

program.parse();
