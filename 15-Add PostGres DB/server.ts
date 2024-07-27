import express from "express";
import "express-async-errors";
import morgan from "morgan";
import { getAll, getOneByID, create, updateByID, deleteByID } from "./controllers/planets.js";

const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.json());

app.get("/api/planets", getAll);

app.get("/api/planets/:id", getOneByID);

app.post("/api/planets", create);

app.put("/api/planets/:id", updateByID);

app.delete("/api/planets/:id", deleteByID);

app.listen(port, () => {
  console.log(`Express app listening on http://localhost:${port}`);
});
