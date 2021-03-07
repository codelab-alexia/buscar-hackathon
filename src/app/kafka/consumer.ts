import { Consumer, KafkaClient, Message } from 'kafka-node';
import CreateHackathon from '../../core/usecases/create_hackathon';
import HackathonRepository from '../database/repository/hackathon_repository';

export function setupKafkaConsumer(client: KafkaClient) {
  const consumer = new Consumer(
    client,
    [{ topic: 'hackathon', partition: 0 }],
    {}
  );

  consumer.on('message', async (msg: Message) => {
    const {
      name,
      description,
      sponsor,
    }: { name: string; description: string; sponsor: string } = JSON.parse(
      msg.value as string
    );
    const createHackathon = new CreateHackathon(new HackathonRepository());
    const savedHackathon = await createHackathon.execute(
      name,
      description,
      sponsor
    );
    console.log('Hackathon saved: ', savedHackathon);
  });

  consumer.on('error', (err) => console.log(err));
}
