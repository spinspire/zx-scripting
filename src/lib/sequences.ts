import { question } from "zx";
import { COLORS } from "./config";
import { personSpeak, say, type_effect } from "./utils";

export async function intro() {
  await say('The train station is dimly lit, but crowded with people.', 2000);
  await say('Your train is docked and awaiting', 0, false);
  await type_effect('...\n', 400);
  await say('Before you get on you are stopped by the Ticket Master.', 1000);

  await personSpeak('TICKET_MASTER', 'Tickets please...');

  await say('You reach into your pocket and pull out your ticket. You read the printed name:');
  const name = await question(`${COLORS.BLUE} Your name is... ${COLORS.RESET}`);

  await personSpeak('TICKET_MASTER', `"Ah, yes. ${name}. Enjoy your ride."`, 0, COLORS.RED);
}