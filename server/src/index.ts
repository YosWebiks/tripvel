import express from "express";
import cors from "cors";
import expenceRouter from "./routes/expense.route";
import settingRouter from "./routes/settings.route";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/expences', expenceRouter)
app.use('/api/settings', settingRouter)

app.listen(3000, () => {
  console.log("[server] I'm up on port 3000");
});
