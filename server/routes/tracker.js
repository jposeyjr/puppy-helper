import express from 'express';
import {
  getPotty,
  createPotty,
  updatePotty,
  deletePotty,
} from '../controllers/tracker.js';
const router = express.Router();

router.get('/tracker', getPotty);
router.post('/tracker', createPotty);
router.patch('/tracker:id', updatePotty);
router.delete('/tracker:id', deletePotty);

export default router;
