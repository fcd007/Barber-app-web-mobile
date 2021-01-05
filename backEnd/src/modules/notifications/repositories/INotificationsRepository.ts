import ICreateNotificationDTO from "../dtos/ICreateNotificationDTO";
import Notification from '@modules/notifications/infra/schemas/Notifications';

export default interface INotificationsRepostitory {
  create(data: ICreateNotificationDTO): Promise<Notification>;
}
