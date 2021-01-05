import { getMongoRepository, MongoRepository } from 'typeorm';

//fazendo a importação da interface appointamentsRepositoty
import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import ICreateNotificationDTO from '@modules/notifications/dtos/ICreateNotificationDTO';
import Notifications from '@modules/notifications/infra/schemas/Notifications';

class NotificationsRepository implements INotificationsRepository {
  //criando uma variável para Repository
  private ormRepository: MongoRepository<Notifications>;
  constructor() {
    this.ormRepository = getMongoRepository(Notifications, 'mongo')
  }

  public async create({
    content,
    recipient_id,
  }: ICreateNotificationDTO ): Promise<Notifications>{
    const notification = this.ormRepository.create({
      content,
      recipient_id,
    });
    //realizando a operação de save() do typeorm
    await this.ormRepository.save(notification);
    //retornando o repositório creado
    return notification;
  }
}

export default NotificationsRepository;
