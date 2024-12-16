import { Document } from 'mongoose';
import { DayModel } from '../models/dayModel';
import { Day } from '../types/models';

export const getDays = async () => {
  try {
    return await DayModel.find({}).lean();
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const addDailyExpense = async (data: Day) => {
  try {
    let day = await DayModel.findOne({
      $gte: new Date(new Date().setHours(0, 0, 0)),
      $lt: new Date(new Date().setHours(23, 59, 59)),
    });

    if (!day) {
      day = new DayModel({});
    }

    day = { ...day, ...(data as any) };

    return await day?.save();
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const patchDailyExpense = async (id: string, data: Day) => {
  try {
    return await DayModel.findByIdAndUpdate(id, {
      $set: data,
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};
