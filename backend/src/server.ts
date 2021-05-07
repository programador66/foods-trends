import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();
app.use(cors());

const contextPath = '/api';
app.use(express.json());
app.use(contextPath,routes);

app.listen(3333, () => {
  console.log('🚀 server started on port 3333');
})