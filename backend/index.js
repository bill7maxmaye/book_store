import express from "express";
import mongoose from "mongoose";
import { mongo_URL, PORT } from "./config.js";
import { Book } from "./models/bookModel.js";

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

app.post("/books", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishedYear) {
      return res
        .status(400)
        .send({ message: "send all required fields from the frontend" });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishedYear: req.body.publishedYear,
    };

    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

app.get("/books", async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).send({ count: books.length, data: books });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
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
    console.log(error);
  });
