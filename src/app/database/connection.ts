import mongoose from 'mongoose';

const mongoHost = process.env.MONGO_HOST || 'localhost';
const mongoPort = process.env.MONGO_PORT || '27017';
const mongoUser = process.env.MONGO_INITDB_ROOT_USERNAME || 'root';
const mongoPass = process.env.MONGO_INITDB_ROOT_PASSWORD || 'root';
const mongoDb = process.env.MONGO_DATABASE || 'test';

const mongoUrl = `mongodb://${mongoUser}:${mongoPass}@${mongoHost}:${mongoPort}`;

export function setupDatabaseConnection() {
  mongoose
    .connect(`${mongoUrl}/${mongoDb}?authSource=admin`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((_) => {
      console.log('Database connected');
    })
    .catch((error) => {
      console.log('Error: ', error);
    });
}
