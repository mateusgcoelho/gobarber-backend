import 'reflect-metadata';
import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';

import uploadConfig from '@config/upload';

import routes from './routes';
import AppError from '@shared/errors/AppError';
import cors from 'cors';

import { errors } from 'celebrate';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.uploadsFolders));
app.use(routes);

app.use(errors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: `error ${err.statusCode}`,
      message: err.message,
    });
  }

  console.log(err);

  return response.status(500).json({
    status: 'error',
    message: 'Unexpected error',
  });
});

app.listen(3333, () => {
  console.log('server is running on port 3333');
});
