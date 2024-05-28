// src/app.js
import express from 'express';
import cookieParser from 'cookie-parser';
import { errorHandler } from './middlewares/error-handler.middleware.js';

const app = express();
const PORT = 3018;

app.use(express.json());
app.use(cookieParser());
app.use(errorHandler);

// app.use(errorHandler());

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});
