import express from "express";
import mongoose from "mongoose";
import { mongo_URL, PORT } from "./config.js";
import { Book } from "./models/bookModel.js";
import bookRoute from "./routes/bookRoutes.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  return res
    .status(222)
    .send(
      "the browser sent a get request to the default / home route and this is the response from the server"
    );
});

app.use("/books", bookRoute);

mongoose
  .connect(mongo_URL)
  .then(() => {
    console.log("****Connected to the database****");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
