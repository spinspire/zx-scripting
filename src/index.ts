#!/bin/bash
import { $, question } from "zx";
import { intro } from "./lib/sequences";
import { terminal } from "terminal-kit";

const history: string[] = []

const table = [
  ['History', 'map'],
  [history.slice(-10).join('\n'), ''],
  ['Command'],
]

async function main(): Promise<undefined> {
  process.env.FORCE_COLOR = '1'
  await $`clear`;

  terminal.table(table, {
    hasBorder: true,
    width: terminal.width,
    fit: true,
  })

  while (true) {
    await question('> ');
  }

  // await intro();
}

try {
  main();
} catch (err) {
  console.log(err);
}
