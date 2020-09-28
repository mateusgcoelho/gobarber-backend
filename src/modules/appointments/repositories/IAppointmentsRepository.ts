import Appointment from "../infra/typeorm/entities/Appointment";

import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';
import IFindALlInMonthFromProviderDTO from "../dtos/IFindAllInMonthFromProviderDTO";

interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
  findAllInMonthFromProvider(
    data: IFindALlInMonthFromProviderDTO
  ): Promise<Appointment[]>;
}

export default IAppointmentsRepository;
