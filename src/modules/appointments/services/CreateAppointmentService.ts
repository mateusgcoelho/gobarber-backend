import { getCustomRepository } from 'typeorm'
import { startOfHour } from 'date-fns';
import AppError from '@shared/errors/AppErros'

import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentRepository';

interface Request {
  provider_id: string;
  date: Date;
}

class CreateAppointmentService {

  public async execute({ provider_id, date }: Request): Promise<Appointment> {

    const appointmentsRepository = getCustomRepository(AppointmentsRepository)

    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is alredy booked');
    }

    const appointment = await appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
