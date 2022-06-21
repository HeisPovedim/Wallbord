import { Markup, Telegraf } from 'telegraf';
import config from '~/config';

const { token } = config.channels.telegram;
const { publicUrl } = config.publish;

if (!token) {
  throw new Error('BOT_TOKEN must be provided');
}

const bot = new Telegraf(token);

// TODO: set up bot responses

const keyboard = Markup.keyboard([
  Markup.button.text('/help'),
]);

bot.start((ctx) => ctx.reply('Supported commands: /help', keyboard));

bot.command('help', (ctx) => ctx.replyWithMarkdown(`
# Help
- To do that, do this
- To do this, do that
- Be happy
`));

// Setting up webhooks...
export const secretPath = `/telegraf/${bot.secretPathComponent()}`;
export const useTelegramWebhook = !!config.publish.publicUrl;

if (useTelegramWebhook) {
  bot.telegram.setWebhook(`${publicUrl}/${secretPath}`);
}

export default bot;
