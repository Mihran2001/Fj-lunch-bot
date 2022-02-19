const TelegramBot = require('node-telegram-bot-api');

const token = '5105526466:AAHIailOkRk2HAWc0RYWUCxLi7fvaZf_fGQ'

const bot = new TelegramBot(token, {
    polling: true
})

bot.on('message', (msg) => {
    console.log('Received a message');
    const res = 'Hi Mihran)'

    bot.sendMessage(msg.chat.id, res)
})