import { model, Schema } from "mongoose";

export const constSchema = new Schema(
  {
    description: String,
    amount: Number,
  },
  { timestamps: true }
);

export const ConstsModel = model("Const", constSchema);
