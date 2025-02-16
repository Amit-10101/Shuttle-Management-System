import { Router } from 'express';
import bookingRouter from './booking.routes';
import userRouter from './user.routes';
import driverRouter from './driver.routes';
import routeRouter from './route.routes';
import vehicleRouter from './vehicle.routes';
// import authRouter from './auth.route';

const apiRouter = Router();

apiRouter.use('/booking', bookingRouter);
apiRouter.use('/user', userRouter);
apiRouter.use('/driver', driverRouter);
apiRouter.use('/route', routeRouter);
apiRouter.use('/vehicle', vehicleRouter);
// apiRouter.use('/auth', authRouter);

export default apiRouter;
