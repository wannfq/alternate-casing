#!/usr/bin/env node

import clear from "clear";
import commander from "commander";
import inquirer from "inquirer";
import { StringConverterService } from "./string-converter-service";
import { CSVWriterService } from "./csv-writer-service";

clear();

const program = new commander.Command() ;
const stringConverterService = new StringConverterService();
const csvWriterService = new CSVWriterService();

program
  .command("run")
  .description("run the command tool")
  .action(async () => {
    try {
      const answers = await inquirer.prompt([
        {
          type: "input",
          name: "input",
          message: "Type string to be converted",
        },
      ]);

      const upperCased = stringConverterService.upper(answers.input);
      console.log(`${upperCased}`);

      const alternateCased = stringConverterService.alternate(answers.input);
      console.log(`${alternateCased}`);

      await csvWriterService.write("output.csv", answers.input.split(""));
      console.log("CSV Created!");
    } catch (error) {
      console.error(error.message);
    }
  });

program.parse(process.argv);
