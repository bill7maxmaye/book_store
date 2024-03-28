import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishedYear,
    };
    setLoading(true);
    axios
      .post("http://localhos:3000/books", data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch(() => {
        setLoading(false);
        alert("Something went wrong");
        console.log(error);
      });
  };

  return (
    <div className=" p-4">
      <BackButton />
      <h1>Create AmDAker</h1>
      {loadding ? <Spinner /> : ""}

      <div className=" flex flex-col border-2 border-sky-400 w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500 ">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-200 rounded-lg w-full p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateBook;
