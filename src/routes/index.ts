import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

routes.get('/', (req, res) => res.json({
  aluno: 'Yuri Baza',
  menssagem: 'Fase 3: Primeiro projeito em NodeJS',
  turma: 'GoStack 11',
  ano: '2020',
  instituição_de_ensino: 'Rocketseat',
}));

routes.use('/appointments', appointmentsRouter);

export default routes;
