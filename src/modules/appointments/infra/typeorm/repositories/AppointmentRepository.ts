import { Repository } from 'typeorm';

import IAppointmentRepostory from '@modules/appointments/repositories/IAppointmentsRepository';

import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';

// SOLID - L = Liskov Substitution Principle

class AppointmentsRepository extends Repository<Appointment>
  implements IAppointmentRepostory {
    public async findByDate(date: Date): Promise<Appointment | undefined> {
      const findAppointment = await this.findOne({
        where: { date },
      });

      return findAppointment;
    }
}

export default AppointmentsRepository;
