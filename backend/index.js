import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Connection from "./database/db.js";
import router from "./routes/route.js";

const app = express();
Connection();
const PORT = 4000;
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running successfully on PORT: ${PORT}`);
});
