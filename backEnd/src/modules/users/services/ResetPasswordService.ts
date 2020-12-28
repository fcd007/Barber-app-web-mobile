import { injectable, inject } from 'tsyringe';

import AppError  from '@shared/errors/AppError';
//SOLID - using dependency inversion
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IUsersTokensRepository from '@modules/users/repositories/IUsersTokensRepository';

interface IRequest{
  token: string;
  password: string;
}
@injectable()
class ResetPasswordService {
  constructor (
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('UserTokensRepository')
    private userTokensRepository: IUsersTokensRepository,
  ) {}

  public async execute({ token, password }: IRequest): Promise<void>{
    const userToken = await this.userTokensRepository.findByToken(token);
    //verificando se o token existe
    if(!userToken) {
      throw new AppError('User token does not exists');
    }

    const user = await this.usersRepository.findById(userToken.user_id);
    //verificando se o usuário existe
    if(!user) {
      throw new AppError('User does not exists');
    }

    user.password = password;

    await this.usersRepository.save(user);
  }
}

export default ResetPasswordService;
