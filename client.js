const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://10.16.87.146:1883')

client.on('connect', () => {
    console.log('MQTT istemci bağlandı');
    client.publish('data', "Emre geldi");
})


