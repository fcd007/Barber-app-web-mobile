import AppError  from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

//SOLID - using dependency inversion
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IUsersTokensRepository from '@modules/users/repositories/IUsersTokensRepository';

interface IRequest{
  email: string;
}
@injectable()
class SendForgotPasswordEmailService {
  constructor (
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('UserTokensRepository')
    private userTokensRepository: IUsersTokensRepository,

    @inject('MailProvider')
    private mailProvider: IMailProvider,
  ) {}

  public async execute({ email }: IRequest): Promise<void>{
    const user = await this.usersRepository.findByEmail(email);

    if(!user){
      throw new AppError('user does not exists.');
    }
    //verificando se o usuário
    await this.userTokensRepository.generate(user.id);

    this.mailProvider.sendMail(email, 'Pedido de recuperação de senha recebido');
 }
}

export default SendForgotPasswordEmailService;
