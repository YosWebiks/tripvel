import { NextFunction, Request, Response } from "express";

export const getExpensesData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
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
  } catch (err) {
    console.error("Can't update an existing expense", err);
    next(err);
  }
};
