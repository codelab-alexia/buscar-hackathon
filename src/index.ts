import express from 'express';
import { KafkaClient } from 'kafka-node';
import router from './app/router';
import { setupKafkaConsumer } from './app/kafka/consumer';
import { setupDatabaseConnection } from './app/database/connection';

const port = process.env.PORT || 3000;
const brokerUrl = process.env.BROKER_URL || 'localhost:9092';

const client = new KafkaClient({
  kafkaHost: brokerUrl,
});

setupDatabaseConnection();
setupKafkaConsumer(client);

const app = express();
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
