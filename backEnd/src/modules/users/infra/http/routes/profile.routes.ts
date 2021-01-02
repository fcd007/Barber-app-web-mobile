import { Router } from 'express';

import ProfileController from '@modules/users/infra/http/controllers/ProfileController';

import ensureAutheticaded from '../middlewares/ensureAuthenticated';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.use(ensureAutheticaded);

profileRouter.get('/', profileController.show);
profileRouter.put('/', profileController.update);

export default profileRouter;
