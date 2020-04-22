import Appointment from '../models/Appointments';
import { startOfHour } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface Request {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  private appointmentsRepository: AppointmentsRepository;

  constructor(appointmentsRepository: AppointmentsRepository){
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({provider, date}: Request) : Appointment {
    const appointmentDate = startOfHour(date);

    const findApoointmentsInTheSameDate = this.appointmentsRepository.findByDate(appointmentDate);

    if(findApoointmentsInTheSameDate){
      throw Error('This appointment is already booked');
    }

    const appointment = this.appointmentsRepository.create({
      provider,
      date: appointmentDate
    });

    return appointment
  }
}

export default CreateAppointmentService;