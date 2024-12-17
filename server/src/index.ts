import express, { Request, Response } from 'express';
import cors from 'cors';
import expenceRouter from './routes/expense.route';
import settingRouter from './routes/settings.route';
import { connentToMongo } from './config/db';

const app = express();

connentToMongo();

app.use(cors());
app.use(express.json());

app.use('/api/expenses', expenceRouter);
app.use('/api/settings', settingRouter);

// Error handeling
app.use(async ( req: Request, res: Response) => {
  console.error("ERR")
  res.send("err")
});

app.listen(3000, () => {
  console.log("[server] I'm up on port 3000");
});
