import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";

import { MdOutlineAddBox } from "react-icons/md";
import BooksTable from "../components/BooksTable";
import BooksCard from "../components/BooksCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [count, setCount] = useState(0);
  const [showType, setShowType] = useState("table");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/books")
      .then((response) => {
        //console.log(response);
        setBooks(response.data.data);
        setCount(response.data.count);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div p-4>
      <div className="flex justify-center gap-x-4 item-center mt-5">
        <button
          className="bg-sky-400 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => {
            setShowType("table");
          }}
        >
          Table
        </button>
        <button
          className="bg-sky-400 hover:bg-sky-600  px-4 py-1 rounded-lg"
          onClick={() => {
            setShowType("card");
          }}
        >
          Card
        </button>
      </div>

      <div className="flex justify-between items-center p-2 ">
        <h1 className="text-3xl">{count}</h1>
        <h1 className="text-3xl my-8"> Dpos List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>

      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
