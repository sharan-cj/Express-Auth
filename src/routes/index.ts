import { Router } from 'express';
import userRoutes from './routes.user';

// Parent Router
const routes = Router();

routes.use(userRoutes);

export default routes;
