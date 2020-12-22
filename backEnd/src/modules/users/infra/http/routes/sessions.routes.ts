import { Router } from 'express';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import AuthenticateUserService from '@modules/users/services/AutheticateUserService';

const sesstionsRouter = Router();
const usersRepository = new UsersRepository();

sesstionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;
  const autenticateUser = new AuthenticateUserService(usersRepository);
  const { user, token } = await autenticateUser.execute({
    email,
    password
  });

  // delete user.password;

   return response.json({ user, token });
});

export default sesstionsRouter;
