import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError'

import IAppointmentsRepository from '../repositories/IAppointmentsRepository';
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import Appointment from '../infra/typeorm/entities/Appointment';

interface IRequest {
  provider_id: string;
  month: number;
  year: number;
  day: number;
}

@injectable()
export default class ListProviderAppointmentsService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({
    provider_id,
    year,
    month,
    day,
  }: IRequest): Promise<Appointment[]> {
    const cacheData = await this.cacheProvider.recover('asd');

    console.log(cacheData);

    const appointments = await this.appointmentsRepository.findAllInDayFromProvider(
      {
        provider_id,
        year,
        month,
        day,
      }
    );

    // await this.cacheProvider.save('asd', 'asd');

    return appointments;
  }
}
