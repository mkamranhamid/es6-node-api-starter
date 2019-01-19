import { Router } from 'express';
import authRoutes from './auth/auth.routes';

export default ({ config, db }) => {
	let api = Router();
	// Auth related all routes
	api.use('/auth', authRoutes());

	return api; 
}
