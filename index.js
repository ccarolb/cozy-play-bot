const TelegramBot = require('node-telegram-bot-api');
const dialogflow = require('./dialogflow')
const youtube = require('./youtube-node')

const token = '5017743178:AAGiCONDjNMM8FL-ypqKnmjeDiLw3GdXS94';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;

    const dfResponse = await dialogflow.sendMessage(chatId.toString(), msg.text)
    let responseText = dfResponse.text

    if (dfResponse.intent === 'Sentimentos específicos') {
        responseText = await youtube.searchVideoURL(responseText, dfResponse.fields.feelings.stringValue);
    }
    bot.sendMessage(chatId, responseText);
});