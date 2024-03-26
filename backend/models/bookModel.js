import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true }, //String,
  author: { type: String, required: true }, //String,
  publishedYear: { type: Number, required: true }, //Number,
  timeStamp: true,
});

export const Book = mongoose.model("Book", bookSchema);
