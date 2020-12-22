import Appointment from '../entities/Appointment';
//fazendo a importação da interface appointamentsRepositoty
import IAppointmentsRepository from '@modules/appointments/repositories/IAppointamentsRepository'

import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment>
  implements IAppointmentsRepository{
  public async findByDate(date: Date): Promise<Appointment | undefined>{
    const findAppointment = await this.findOne({
      where: { date: date},
    })

    return findAppointment || undefined;
  }
}

export default AppointmentsRepository;
