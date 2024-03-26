import express from "express";
import mongoose from "mongoose";
import { mongo_URL, PORT } from "./config.js";

const app = express();

app.get("/", (req, res) => {
  console.log(req);
  return res
    .status(222)
    .send(
      "the browser sent a get request to the default / home route and this is the response from the server"
    );
});

mongoose
  .connect(mongo_URL)
  .then(() => {
    console.log("****Connected to the database****");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(eror);
  });
