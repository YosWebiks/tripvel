import { Router } from 'express';
import {
  addNewExpense,
  getExpensesData,
  updateExistingExpense,
} from '../controllers/expense.controller';

const router = Router();

router.get('/', getExpensesData);

router.get('/dashboard', () => {});

router.post('/', addNewExpense);

router.patch('/:id', updateExistingExpense);

export default router;
