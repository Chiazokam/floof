import express from 'express';
import BanksController from '../controllers/banks';
import tryCatch from '../utils/tryCatch';

const router = express.Router();
const { getAllBanks } = BanksController;

router.get('/banks', tryCatch(getAllBanks));

export default router;
