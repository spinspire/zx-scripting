import { sleep } from "zx";
import { COLORS, PEOPLE } from "./config";

export async function type_effect(message: string, sleep_amt: number = 50, pause: number = 0) {
  for (let i = 0; i < message.length; i++) {
    await sleep(sleep_amt);
    process.stdout.write(message[i]);
  }
  if (pause) await sleep(pause);
}

export async function say(message: string, pause: number = 1000, newline: boolean = true) {
  await type_effect(message + (newline ? '\n' : ''));
  await sleep(pause);
}

export async function personSpeak(person: keyof typeof PEOPLE, message: string, pause: number = 1000, message_color: COLORS = COLORS.RESET) {
  const { name, color } = PEOPLE[person];
  await type_effect(`${color} ${name}: `, 0, 500);
  await say(`${message_color} ${message}`, pause);
}