import express from "express";
import cors from "cors";
import records from "./routes/record.js";

const PORT = "https://mern-1-hhq6.onrender.com"
const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", records);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});