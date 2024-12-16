import { connect } from 'mongoose';
import { SettingsModel } from '../models/settingsModel';
import { createSid } from '../services/settings.service';

export const connentToMongo = async () => {
  try {
    await connect('mongodb://localhost/tripvel');
    console.log('[database] mongo successfully connected');
    const settings = await SettingsModel.findOne();
    if (!settings) {
      await createSid();
      console.log('[database] sid created');
    }
  } catch (err) {
    console.error(err);
  }
};
