import 'reflect-metadata';
import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';

import uploadConfig from '@config/upload';

import routes from './routes';
import AppError from '@shared/errors/AppErros';
import cors from 'cors';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: `error ${err.statusCode}`,
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Unexpected error',
  });
});

app.listen(3333, () => {
  console.log('server is running on port 3333');
});
