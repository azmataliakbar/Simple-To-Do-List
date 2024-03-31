#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

function rainbowText(text: any) {
  const rainbowColors = [
      chalk.red.bold.italic,
      chalk.yellow.bold.italic,
      chalk.green.bold.italic,
      chalk.blue.bold.italic,
      chalk.magenta.bold.italic,
      chalk.cyan.bold.italic
  ];

  let coloredText = '';
  for (let i = 0; i < text.length; i++) {
      const color = rainbowColors[i % rainbowColors.length];
      coloredText += color(text[i]);
  }
  return coloredText;
}

const currentDateTime = new Date();
const currentDate = currentDateTime.toLocaleDateString();
const currentTime = currentDateTime.toLocaleTimeString();

console.log(rainbowText(`\nDate: ${currentDate} & Time: ${currentTime}`));
console.log();

console.log(chalk.yellowBright.italic.bold.underline("\n🟠🟢🔵  Welcome to the TODO List 🔵🟢🟠\n"));

let menu = await inquirer.prompt({
  name: "selectMenu",
  type: "list",
  message: chalk.magentaBright.italic.bold.underline("Select option you want to perform"),
  choices: ["Tasks for today", "Adding tasks to a list", "Editing task details", "Deleting tasks", "Marking tasks as complete"]
})
if (menu.selectMenu === 'Tasks for today'){

  const tasksForToday: string[] = [];
  let addAnotherTask = true;

  while (addAnotherTask) {
    const { task } = await inquirer.prompt({
      type: 'input',
      name: 'task',
      message: chalk.blueBright.italic.bold('Enter task or (leave blank to finish and press enter):')
    });

    if (task.trim() !== '') {
      tasksForToday.push(task.trim());
    } else {
      addAnotherTask = false;
    }
  }

  console.log(chalk.greenBright.italic.bold.underline("\nTasks for Today's To Do List:- "));

  tasksForToday.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });

}else if (menu.selectMenu === 'Adding tasks to a list') {
  const tasksForToday: string[] = [];
  let addAnotherTask = true;

  while (addAnotherTask) {
    const { task } = await inquirer.prompt({
      type: 'input',
      name: 'task',
      message: chalk.blueBright.italic.bold('Enter task or (leave blank to finish and press enter):')
    });

    if (task.trim() !== '') {
      tasksForToday.push(task.trim());
    } else {
      addAnotherTask = false;
    }
  }

  console.log(chalk.greenBright.italic.bold.underline("\nMore Tasks Added in To Do List:- "));
  
  tasksForToday.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });

} else if (menu.selectMenu === 'Editing task details') {

  const tasksForToday: string[] = [];
  let addAnotherTask = true;

  while (addAnotherTask) {

    const { task } = await inquirer.prompt({
      type: 'input',
      name: 'task',
      message: chalk.blueBright.italic.bold('Enter task or (leave blank to finish and press enter):')
    });

    if (task.trim() !== '') {
      tasksForToday.push(task.trim());
    } else {
      addAnotherTask = false;
    }
  }

  console.log(chalk.greenBright.italic.bold.underline("\nEdited in Tasks in To Do List:- "));

  tasksForToday.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });

} else if (menu.selectMenu === 'Deleting tasks') {

  const tasksForToday: string[] = [];
  let addAnotherTask = true;

  while (addAnotherTask) {
    const { task } = await inquirer.prompt({
      type: 'input',
      name: 'task',
      message: chalk.blueBright.italic.bold('Enter task or (leave blank to finish and press to enter):')
    });

    if (task.trim() !== '') {
      tasksForToday.push(task.trim());
    } else {
      addAnotherTask = false;
    }
  }

  console.log(chalk.greenBright.italic.underline("\nDeleted Tasks from To Do List:- "));
  
  tasksForToday.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });

} else if (menu.selectMenu === 'Marking tasks as complete') {

  const tasksForToday: string[] = [];
  let addAnotherTask = true;

  while (addAnotherTask) {
    const { task } = await inquirer.prompt({
      type: 'input',
      name: 'task',
      message: chalk.blueBright.italic.bold('Enter task or (leave blank to finish and press enter):')
    });

    if (task.trim() !== '') {
      tasksForToday.push(task.trim());
    } else {
      addAnotherTask = false;
    }
  }

  console.log(chalk.greenBright.italic.bold.underline("\nMarked the Tasks Completed from To Do List:- "));
  
  tasksForToday.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });

}

console.log(chalk.redBright.italic.bold.underline("\nPlease scroll up / down To Do List to see all details."));