import 'reflect-metadata';

// import AppError from '@shared/errors/AppError';

import FakeHashProvider  from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import UpdateProfileService from '@modules/users/services/UpdateProfileService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider:FakeHashProvider;
let updateProfile: UpdateProfileService;
//vamos categorizar os testes
describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    updateProfile = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider
    );
  });

  //test to create new user - update avatar
  it('Shold be able to update the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456789',
    });

    const updateUser = await updateProfile.execute({
      user_id: user.id,
      name: 'john Duo2',
      email: 'johnduo2@gmail.com',
    });

    expect(updateUser.name).toBe('john Duo2');
    expect(updateUser.email).toBe('johnduo2@gmail.com');
  });
});
