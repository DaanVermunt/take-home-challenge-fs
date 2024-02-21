import express from 'express';
import { getHeros } from './service/heroes';
import { Hero } from './service/db';

const router = express.Router();

router.get('/heroes', async (req, res) => {
  const heroes: Hero[] = await getHeros();
  res.send({ heroes });
});

export default router;
