const aedes = require('aedes')()
const server = require('net').createServer(aedes.handle)
const axios = require('axios');

server.listen(1883, function () {
    console.log('Aedes MQTT broker is listening on port 1883')
})

aedes.on('subscribe', function (subscriptions, client) {
    console.log('MQTT client subscribed=> subscriptions:', subscriptions)
})

aedes.on('unsubscribe', function (subscriptions, client) {
    console.log('MQTT client unsubscribed=> subscriptions:', subscriptions)
})

aedes.on('client', function (client) {
    console.log('MQTT client connected=>', client?.id)
})

aedes.on('clientDisconnect', function (client) {
    console.log('MQTT client disconnected => ', client?.id)
})

aedes.on('publish', function (packet, client) {
    console.log('MQTT client published=> packet.payload:', packet.payload.toString())
})
