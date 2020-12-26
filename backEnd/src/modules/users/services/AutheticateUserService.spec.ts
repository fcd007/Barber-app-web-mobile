import 'reflect-metadata';

// import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import AutheticateUserService from './AutheticateUserService';
import CreateUserService from './CreateUserService';

//vamos categorizar os testes
describe('AuthenticateUser', () => {
  //test to create new user
  it('Shold be able to authenticate', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(fakeUsersRepository);
    const autheticateUser = new AutheticateUserService(fakeUsersRepository);

    await createUser.execute({
      name: 'Claudeilton Dantas',
      email: 'fcd007@hotmail.com',
      password: '123456789'
    });

    const response = await autheticateUser.execute({
      email: 'fcd007@hotmail.com',
      password: '123456789',
    });

    expect(response).toHaveProperty('token');
  });
});
