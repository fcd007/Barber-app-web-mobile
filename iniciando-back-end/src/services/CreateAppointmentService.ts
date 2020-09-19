import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import { startOfHour } from 'date-fns';

/*
Erros para solucionar no service
1 - Recebimento das informações;
2 - Tratative de erros/excessões;
3 - Acesso ao repositório.
*/
interface Request {
  provider: string;
  date: Date;
}
/*
* Dependency Inversion (SOLID)
*/

class CreateAppointmentService {
  private appointmentsRepository: AppointmentsRepository;
  constructor(appointmentsRepository: AppointmentsRepository ) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({ provider, date }: Request): Appointment {

  const appointmentDate =  startOfHour(date);

  const findAppointmentInSameDate = this.appointmentsRepository.findByDate(
    appointmentDate,
  );

  if(findAppointmentInSameDate) {
    throw Error('This appointment os alread booked');
  }

  const appointment = this.appointmentsRepository.create({
    provider,
    date: appointmentDate,
  });

  return appointment;
  }
}

export default CreateAppointmentService;
