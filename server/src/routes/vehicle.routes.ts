import { Router } from 'express';
import { getAllVehicles } from '../controllers/vehicle.controller';

const router = Router();

router.get('/', getAllVehicles);

export default router;
