import 'reflect-metadata';

import ListProviderDayAvailabilityService from '@modules/appointments/services/ListproviderDayAvailabilityService';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';

let listDayAvailabilityProviders: ListProviderDayAvailabilityService;
let fakeAppointmentsRepository: FakeAppointmentsRepository;
//vamos categorizar os testes
describe('ListProviderDayAvailable', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listDayAvailabilityProviders = new ListProviderDayAvailabilityService(
      fakeAppointmentsRepository,
    );
  });

  //test to availability month the providers
  it('Shold be able to list the day availability the from provider.', async () => {
    await fakeAppointmentsRepository.create({
      provider_id: 'provider_id',
      date: new Date(2020, 11, 30, 8, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'provider_id',
      date: new Date(2020, 11, 30, 10, 0, 0),
    });

    const availability = await listDayAvailabilityProviders.execute({
      provider_id: 'provider_id',
      day: 30,
      year: 2020,
      month: 12,
    });


    //devemos esperar o array esteja com dados true
    expect(availability).toEqual(expect.arrayContaining([
      { hour: 8, available: false },
      { hour: 9, available: true },
      { hour: 10, available: false },
      { hour: 11, available: true },
    ]))
  });
});
