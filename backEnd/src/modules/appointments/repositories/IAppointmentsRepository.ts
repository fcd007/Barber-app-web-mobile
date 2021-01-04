import Appointment from '../infra/typeorm/entities/Appointment';

import ICreateAppointmentTDO from '@modules/appointments/dtos/ICreateAppointmentDTO'
import IFindAllInMonthProviderDTO from '../dtos/IFindAllInMonthProviderDTO';

export default interface IAppointamentsRepository {
  //definindo os formato do método create com base na interface
  create(data: ICreateAppointmentTDO): Promise<Appointment>;
  findByDate(data: Date): Promise<Appointment | undefined>;
  findAllMonthProviders(
    data: IFindAllInMonthProviderDTO,
    ): Promise<Appointment[]>;
}
