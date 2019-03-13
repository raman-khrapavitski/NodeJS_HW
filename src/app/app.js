import express from 'express';
import queryParser from './middlewares/cookie-parser';
import cookieParser from './middlewares/query-parser';
import router from './routes/index';

const app = express();

app.use(cookieParser);
app.use(queryParser);
app.use(express.json());
app.use(router);

export default app;
