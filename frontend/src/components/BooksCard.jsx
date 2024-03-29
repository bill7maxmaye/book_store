import React from "react";

const BooksCard = ({ books }) => {
  // Check if books array exists and has at least one element
  if (!books || books.length === 0) {
    return <div className="text-center text-gray-600">No books available</div>;
  }

  return (
    <div className=" p-5  max-w-full mx-auto bg-white rounded-3xl shadow-md overflow-hidden">
      <div className="text-center text-xl font-semibold bg-gray-200 py-4">
        Book Titles
      </div>
      <ul className="divide-y divide-gray-200 max-h-80 overflow-y-auto">
        {books.map((book) => (
          <li key={book._id} className="px-4 py-2">
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksCard;
