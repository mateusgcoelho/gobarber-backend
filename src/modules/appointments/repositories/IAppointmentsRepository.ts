import Appointment from "../infra/typeorm/entities/Appointment";

import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';
import IFindALlInMonthFromProviderDTO from "../dtos/IFindAllInMonthFromProviderDTO";
import IFindALlInDayFromProviderDTO from "../dtos/IFindAllInDayFromProviderDTO";

interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date, provider_id: string): Promise<Appointment | undefined>;
  findAllInMonthFromProvider(
    data: IFindALlInMonthFromProviderDTO
  ): Promise<Appointment[]>;
  findAllInDayFromProvider(
    data: IFindALlInDayFromProviderDTO
  ): Promise<Appointment[]>;
}

export default IAppointmentsRepository;
