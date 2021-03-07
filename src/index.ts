import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get('/', (_, response) => {
  return response.status(200).json({ message: 'Success!' });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
