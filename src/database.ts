import mongoose from 'mongoose';

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017';
const mongoDb = process.env.MONGO_INITDB_DATABASE || 'test';

const connect = () => {
  mongoose
    .connect(`${mongoUrl}/${mongoDb}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((_) => {
      console.log('Database connected');
    })
    .catch((error) => {
      console.log('Error: ', error);
    });
};

connect();
