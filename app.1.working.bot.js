'use strict'
const http = require('http')
const Bot = require('messenger-bot')

let bot = new Bot({
  token: 'TTEAAYq4RTioFABADtZCM0kb7yoAsKoLB6UY9loaUMm1gANtM5TIcjhf03gWv5RZBWFqMF7FbwyAA2x9rZCTo0DNxFZCtIwY5RZA0i0hBXBMfKNfVcSveyCY6fXNk8720WC78OqTsG2STSxhwdYa0cXZAkLJpYlYnd3QF7ZCD6TVuLOwZDZD',
  verify: 'FEDEX_TRACK_BOT'
})

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  let text = payload.message.text

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) console.log(err)

    reply({ text }, (err) => {
      if (err) console.log(err)

     /* console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`) */
    })
  })
})

http.createServer(bot.middleware()).listen(8080)
