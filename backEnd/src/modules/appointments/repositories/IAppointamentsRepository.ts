import Appointment from '../infra/typeorm/entities/Appointment';

export default interface IAppointamentsRepository {
  findByDate(date: Date): Promise<Appointment | undefined>;
}
