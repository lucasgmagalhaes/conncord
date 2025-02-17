/* eslint-disable @typescript-eslint/no-var-requires */
// This file must be .js. If it's .ts
// for some reason, tests will throw
// Error: Cannot find module './corde.config'
// A task to fix this problem is informed on
// https://github.com/cordejs/corde/issues/490

import env from "dotenv";

var result = env.config();

// Do not throw any error if the project in running inside CI.
if (!process.env.CI && result.error) {
  throw result.error;
}

const botPrefix = process.env.BOT_PREFIX;
const botTestId = process.env.BOT_TEST_ID;
const channelId = process.env.CHANNEL_ID;
const cordeBotToken = process.env.CORDE_TEST_TOKEN;
const guildId = process.env.GUILD_ID;
const testMatches = ["./test/**"];
const botToken = process.env.BOT_TEST_TOKEN;
const timeout = process.env.TIME_OUT;
const project = "./tsconfig.json";

export {
  botPrefix,
  botTestId,
  channelId,
  cordeBotToken,
  guildId,
  botToken,
  testMatches,
  timeout,
  project,
};
