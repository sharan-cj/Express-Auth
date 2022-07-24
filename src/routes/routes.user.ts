import { Router } from 'express';
import { getRoute } from '../controllers/controller.user';
// User Router
const routes = Router();

// User Routes
routes.get('/', getRoute);

export default routes;
