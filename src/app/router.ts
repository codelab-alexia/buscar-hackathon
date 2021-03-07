import { Router } from 'express';
import HackathonController from './controllers/hackathon_controller';

const router = Router();
const hackathonController = new HackathonController();

router.get('/hackathons', hackathonController.find);

export default router;
