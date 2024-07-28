import express from "express";
import "express-async-errors";
import morgan from "morgan";
import { getAll, getOneByID, create, updateByID, deleteByID, createImage } from "./controllers/planets.js";
import { login, signUp, logout } from "./controllers/users.js";
import authorize from "./authorize.js";
import multer from "multer";
import "./passport.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

const app = express();
const port = 3000;

app.use("/uploads", express.static("uploads"));

app.use(morgan("dev"));
app.use(express.json());

app.get("/api/planets", getAll);
app.get("/api/planets/:id", getOneByID);
app.post("/api/planets", create);
app.put("/api/planets/:id", updateByID);
app.delete("/api/planets/:id", deleteByID);

app.post("/api/planets/:id/image", authorize, upload.single("image"), createImage);

app.post("/api/users/login", login);
app.post("/api/users/signup", signUp);
app.get("/api/users/logout", authorize, logout);

app.listen(port, () => {
  console.log(`Express app listening on http://localhost:${port}`);
});
