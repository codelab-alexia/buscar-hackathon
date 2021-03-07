import { Consumer, KafkaClient, Message } from 'kafka-node';

export function setupKafkaConsumer(client: KafkaClient) {
  const consumer = new Consumer(
    client,
    [{ topic: 'hackathon', partition: 0 }],
    {}
  );

  consumer.on('message', (msg: Message) => {
    console.log('Mensagem aqui: ', JSON.parse(msg.value as string));
  });

  consumer.on('error', (err) => console.log(err));
}
