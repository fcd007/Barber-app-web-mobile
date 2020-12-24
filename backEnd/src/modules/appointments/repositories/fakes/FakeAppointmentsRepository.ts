import { uuid } from 'uuidv4';

import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
//fazendo a importação da interface appointamentsRepositoty
import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import ICreateAppointmentTDO from '@modules/appointments/dtos/ICreateAppointmentDTO';

class AppointmentsRepository implements IAppointmentsRepository {
  private appointments: Appointment[] = [];

  public async findByDate(date: Date): Promise<Appointment | undefined>{
    const findAppointment = this.appointments.find(appointment =>
      appointment.date === date,
    );

    return findAppointment;
  }
  //definindo e implementando o método create com base na interface
  public async create({
    provider_id,
    date
  }: ICreateAppointmentTDO ): Promise<Appointment>{
    const appointment = new Appointment();
    //atribuindo valores ao appointment
    Object.assign({ id: uuid(), date, provider_id });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;