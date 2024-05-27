// src/app.js

import express from 'express';
import cookieParser from 'cookie-parser';
import prisma from './utils/prisma.util.js';
import errorHandler from './middlewares/error-handler.middleware.js';

const app = express();
const PORT = 3018;

app.use(express.json());
app.use(cookieParser());
app.use(prisma());
app.use(errorHandler());
app.use('/api', []);

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});
