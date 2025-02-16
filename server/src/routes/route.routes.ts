import { Router } from 'express';
import { getAllRoutes } from '../controllers/route.controller';

const router = Router();

router.get('/', getAllRoutes);

export default router;
