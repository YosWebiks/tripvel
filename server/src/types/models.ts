import { constSchema } from "../models/constModel";
import { daySchema } from "../models/dayModel";
import { settingSchema } from "../models/settingsModel";

export type Setting = ReturnType<() => typeof settingSchema>;

export type Day = ReturnType<() => typeof daySchema>;

export type Const = ReturnType<() => typeof constSchema>;
