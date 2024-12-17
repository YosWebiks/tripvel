import { ConstsModel } from '../models/constModel';
import { Const } from '../types/models';

export const getConstsList = async () => {
  try {
    return await ConstsModel.find({}).lean();
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const addConstExpense = async (data: any) => {
  try {
    const constExpense = new ConstsModel({
      amount: data['const'],
      description: data.desc,
    });
    return await constExpense.save();
  } catch (err) {
    console.error(err);
    throw err;
  }
};
