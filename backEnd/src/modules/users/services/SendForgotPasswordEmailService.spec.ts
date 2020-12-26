import 'reflect-metadata';

// import AppError from '@shared/errors/AppError';

// TDD - RED => FAILURE | GREEN => PASSED | REFATORE
import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import SendForgotPasswordEmailService from './SendForgotPasswordEmailService';

//vamos categorizar os testes
describe('SendForgotPasswordEmail', () => {
  //test to create new user
  it('Shold be able to recover the password using e-mail', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeMailProvider = new FakeMailProvider();

    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

    const sendForgotPasswordMail = new SendForgotPasswordEmailService(
      fakeUsersRepository,
      fakeMailProvider
    );

    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@mail.com',
      password: '12456789'
    });

    await sendForgotPasswordMail.execute({
      email: 'johndoe@mail.com',
  });

    //retorna se a função foi chamada
    expect(sendMail).toHaveBeenCalled();
  });
});
