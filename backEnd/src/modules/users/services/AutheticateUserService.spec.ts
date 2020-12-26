import 'reflect-metadata';

// import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import AutheticateUserService from './AutheticateUserService';
import CreateUserService from './CreateUserService';

//vamos categorizar os testes
describe('AuthenticateUser', () => {
  //test to create new user
  it('Shold be able to authenticate', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider
    );

    const autheticateUser = new AutheticateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    const user = await createUser.execute({
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
