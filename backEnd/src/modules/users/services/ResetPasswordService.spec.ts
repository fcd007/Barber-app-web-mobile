import 'reflect-metadata';

// TDD - RED => FAILURE | GREEN => PASSED | REFATORE
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeUsersTokensRepository from '@modules/users/repositories/fakes/FakeUsersTokensRepository';
import ResetPasswordService from './ResetPasswordService';
// import AppError from '@shared/errors/AppError';

//criando variáveis globais para criar repositórios
let fakeUsersRepository: FakeUsersRepository;
let fakeUserTokensRepository: FakeUsersTokensRepository;
let resetPasswordService: ResetPasswordService;

//vamos categorizar os testes
describe('ResetPasswordService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeUserTokensRepository = new FakeUsersTokensRepository();

    resetPasswordService = new ResetPasswordService(
      fakeUsersRepository,
      fakeUserTokensRepository
    );
  });
  //test to recover password
  it('Shold be able to reset the password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@mail.com',
      password: '12456789'
    });

    const { token } = await fakeUserTokensRepository.generate(user.id);

    await resetPasswordService.execute({
      token,
      password: '123123123'
  });

  const updateUser = await  fakeUsersRepository.findById(user.id);
    //retorna se a função foi chamada
    expect(updateUser?.password).toBe('123123123');
  });
});
