import express from "express";
import registerRouts from "./routes/registerR.js";
import messagesRouts from "./routes/messagesR.js";
import usersRouts from "./routes/usersR.js";
import { config } from "dotenv";
import {connect} from "./db/mongodb.js"

config();
const app = express();
app.use(express.json());
connect()


const port = process.env.PORT;
app.get("/health", (req, res) => {
  res.json({ ok: true });
});
app.use("/api/auth/register",registerRouts)
app.use("/api/users/me", usersRouts);
app.use("/api/messages", messagesRouts);

app.listen(port, () => {
  console.log(`server runing on http://localhost:${port}`);
});
