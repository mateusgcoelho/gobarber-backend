import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authencicateUser = new AuthenticateUserService();

  const { user, token } = await authencicateUser.execute({
    email,
    password,
  });

  delete user.password;

  response.json({ user, token });
});

export default sessionsRouter;
