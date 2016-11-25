const express = require('express')
const Twitter = require('twitter')
const config = require('./config')

const PORT = process.env.PORT || 3000
const app = express()


const client = new Twitter({
  consumer_key: config.apiKey,
  consumer_secret: config.apiSecret,
  access_token_key: config.tokenKey,
  access_token_secret: config.tokenSecret,
})


app.get('/:message', function(req, res) {
  const message = { status: req.params.message }

  client.post('statuses/update', message, function(error) {
    if (error) return res.send(error)

    res.send('Sent!')
  })
})


app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
