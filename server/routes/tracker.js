import express from 'express';
import {
  getTracker,
  createTracker,
  updateTracker,
  deleteTracker,
} from '../controllers/tracker.js';
const router = express.Router();

router.get('/', getTracker);
router.post('/', createTracker);
router.patch('/:id', updateTracker);
router.delete('/:id', deleteTracker);

export default router;
