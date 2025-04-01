import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
  res.send('the list of products 123');
});

router.get('/', (req, res) => {
  res.send('A product');
});
router.post('/:id', (req, res) => {
  res.send('New product created');
});

export default router;