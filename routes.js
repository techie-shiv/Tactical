import { Router } from 'express';
const router = Router();
import authRouter from './Routes/auth.js';
import moviesRouter from './Routes/movie.js';
import { JwtVerification } from './utils/commonFun.js';

router.use('/auth', authRouter);
router.use('/movies', JwtVerification, moviesRouter);

export default router;
