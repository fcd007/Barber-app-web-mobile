import CreateAppoitmentService from '@modules/appointments/services/CreateAppointmentService'
import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository'



//vamos categorizar os testes
describe('CreateAppoitment', () => {
  //test to create new appointment
  it('Shold be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppoimentRepository = new CreateAppoitmentService(
      fakeAppointmentsRepository
    );

    const appointment = await createAppoimentRepository.execute({
      date: new Date(),
      provider_id: '12345678',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('12345678');
  });
  // test not create new tow appointment same time
  // it('Shold not be able to create two appoitments on the same time', () => {
  //   expect(1 + 2).toBe(3);
  // });
});
