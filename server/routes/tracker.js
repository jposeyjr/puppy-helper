import express from 'express';
import {
  getTracker,
  getTrackerById,
  createTracker,
  updateTracker,
  deleteTracker,
} from '../controllers/tracker.js';
const router = express.Router();

router.get('/', getTracker);
router.get('/:id', getTrackerById);
router.post('/', createTracker);
router.patch('/:id', updateTracker);
router.delete('/:id', deleteTracker);

export default router;
