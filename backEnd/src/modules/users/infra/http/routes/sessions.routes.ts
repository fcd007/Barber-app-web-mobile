import { Router } from 'express';

import SessionsController from  '@modules/users/infra/http/controllers/SessionsController';

const sesstionsRouter = Router();
const sessionsController = new SessionsController();

sesstionsRouter.post('/', sessionsController.create);

export default sesstionsRouter;
