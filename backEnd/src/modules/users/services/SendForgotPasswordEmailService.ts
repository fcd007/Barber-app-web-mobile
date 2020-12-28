import AppError  from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

//SOLID - using dependency inversion
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';

interface IRequest{
  email: string;
}
@injectable()
class SendForgotPasswordEmailService {
  constructor (
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('MailProvider')
    private mailProvider: IMailProvider,
  ) {}

  public async execute({ email }: IRequest): Promise<void>{
    const checkUserExistis = await this.usersRepository.findByEmail(email);

    if(!checkUserExistis){
      throw new AppError('user does not exists.');
    }
    this.mailProvider.sendMail(email, 'Pedido de recuperação de senha recebido');
 }
}

export default SendForgotPasswordEmailService;
