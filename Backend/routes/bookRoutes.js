const express = require("express");
const router = express.Router();

const Book = require("../model/bookModel.js");

const booksController = require("../controllers/booksController");

//  make routes for the app

router.get('/', booksController.getAllBooks)

router.post('/', booksController.addBook)

router.get('/:id', booksController.getBookById)

router.put('/:id', booksController.updateBook)

router.delete('/:id', booksController.deleteBook)





// router.get("/", async (req, res, next) => {

//  THE ENTIRE FUNCTIONALITY OF THESE ROUTES IS HANDLED INSIDE CONTROLLERS
//   let books = [];
//   try {
//     books = await Book.find();
//   } catch (err) {
//     console.log(err);
//   }

//   if (!books) {
//     return res.status(404).json({
//       message: "No Book products found!!",
//     });
//   }
//   return res.status(200).json({ books });
// });



module.exports = router;
