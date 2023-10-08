#!/bin/bash
import { intro } from "./lib/sequences";

async function main(): Promise<undefined> {
  process.env.FORCE_COLOR = '1'
  await intro();
}

try {
  main();
} catch (err) {
  console.log(err);
}
