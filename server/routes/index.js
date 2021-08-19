import express from 'express';
import banksRoute from './banks';

const router = express.Router();

router.use('/', banksRoute);

router.use('*', (req, res) => {
  res.status(200).json({ message: 'Welcome to Floof' });
});

export default router;
