import { Router } from 'express';
import { getSettings, updateSetting } from '../controllers/settings.controller';

const router = Router();

router.post('/', updateSetting);

router.get('/', getSettings);

export default router;
