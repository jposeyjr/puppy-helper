import express from 'express';
import {
  getPuppies,
  createPuppy,
  updatePuppy,
  deletePuppy,
} from '../controllers/puppy.js';
const router = express.Router();

router.get('/', getPuppies);
router.post('/', createPuppy);
router.patch('/:id', updatePuppy);
router.delete('/:id', deletePuppy);

export default router;
