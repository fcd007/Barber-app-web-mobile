import { injectable, inject } from 'tsyringe';

//SOLID - using dependency inversion
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IHashProvider  from '@modules/users/providers/HashProvider/models/IHashProvider';
import User from '../infra/typeorm/entities/User';
import AppError from '@shared/errors/AppError';

interface IRequest {
  user_id: string;
  name: string;
  email: string;
  old_password?: string;
  password?: string;
}

@injectable()
class UpdateProfile {
  constructor (
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hasProvider: IHashProvider,
  ) {}

  public async execute({ user_id, name, email }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);
    if(!user) {
      throw new AppError('user not exists!');
    }

    user.name = name;
    user.email = email;

    await this.usersRepository.save(user);

    return user;
  }
}

export default UpdateProfile;
