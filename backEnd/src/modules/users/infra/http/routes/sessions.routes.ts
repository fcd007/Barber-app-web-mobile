import { Router } from 'express';
import { container } from 'tsyringe';

import AuthenticateUserService from '@modules/users/services/AutheticateUserService';

const sesstionsRouter = Router();

sesstionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const autenticateUser = container.resolve(AuthenticateUserService);
  const { user, token } = await autenticateUser.execute({
    email,
    password
  });

  // delete user.password;

   return response.json({ user, token });
});

export default sesstionsRouter;
