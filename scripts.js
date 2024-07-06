const brokerUrl = 'ws://broker.emqx.io:8083/mqtt';
const topicSensor = "tes/18921/topic/sensor";
const topicLampu = "tes/18921/topic/lampu";

const client = new MQTTClient(brokerUrl);
const options = { qos: 1, retain: true };

client.onConnect = () => {
    client.subscribe(topicSensor);
};

client.onMessage = (topic, message) => {
    console.log('Topic:', topic);
    console.log('Message:', message.toString());
};

function publish_led(message) {
    client.publish(topicLampu, message, options);
}

client.connect();