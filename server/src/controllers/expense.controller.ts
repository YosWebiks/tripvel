import { NextFunction, Request, Response } from 'express';
import {
  addDailyExpense,
  getDays,
  patchDailyExpense,
} from '../services/day.service';
import { addConstExpense, getConstsList } from '../services/const.service';

export const getExpensesData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const days = await getDays();
    const constExp = await getConstsList();
    res.json({
      days,
      constExp,
    });
  } catch (err) {
    console.error("Can't get expenses data", err);
    next(err);
  }
};

export const getAggregatedDashboard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (err) {
    console.error("Can't get dashboard data", err);
    next(err);
  }
};

export const addNewExpense = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.body.type == 'const') {
      res.json(await addConstExpense(req.body));
    } else {
      res.json(await addDailyExpense(req.body));
    }
  } catch (err) {
    console.error("Can't add new expense ", err);
    next(err);
  }
};

export const updateExistingExpense = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await patchDailyExpense(req.params.id, req.body);
  } catch (err) {
    console.error("Can't update an existing expense", err);
    next(err);
  }
};
