import { NextFunction, Request, Response } from 'express';
import { getSettings as get, patchSetting } from '../services/settings.service';

export const updateSetting = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await patchSetting(req.body));
  } catch (err) {
    console.error("Can't update settings", err);
    next(err);
  }
};

export const getSettings = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await get());
  } catch (err) {
    console.error("Can't get settings", err);
    next(err);
  }
};
