const { addBooksHandler, getAllBooksHandler, getBooksByIDHandler, editBooksByIDHandler, deleteBooksByIDHandler } = require("./handler");

const route = [
  {
    method: "POST",
    path: "/books",
    handler: addBooksHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler,
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getBooksByIDHandler,
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: editBooksByIDHandler,
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteBooksByIDHandler,
  },
];

module.exports = route;
