const express = require("express");

const Book = require("../model/bookModel");

const getAllBooks = async (req, res, next) => {
  let books;
  try {
    //  to get all data of all books, we use Book.find(),
    // if no query is written inside find, then it will return all the items in the database

    books = await Book.find();

    // hard coding and adding new data to book data, by using new Book({..}) and .save()
    //   const newBook = new Book({
    //     "name" : "Story... Of My Life",
    //     "author" : "Hellen Keller",
    //     "description" : "The Story of My Life (1903) chronicles the early years of Helen Keller, a young woman who became both deaf and blind at a young age. The book explores the challenges she faced growing up as a child with disabilities, and introduces the amazing people who helped her along the way.",
    //     "price" : 1999,
    //     "available" : true,
    //     "image": "https://barbarah.files.wordpress.com/2018/04/helen-keller.jpg?w=584"
    // })
    // await newBook.save()
  } catch (err) {
    console.log(err);
  }

  //  if no products found, then we can manually send a response

  if (!books) {
    return res.status(404).json({
      message: "No Book products found!!",
    });
  }
  return res.status(200).json({ books: books });
};

const addBook = async (req, res, next) => {
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      available,
      image,
    });

    //  to save this added data in database

    // const newBook = await Book.insertOne({
    //   name: "Storu Of My Life",
    //   author: "Hellen Keller",
    //   description:
    //     "The Story of My Life (1903) chronicles the early years of Helen Keller, a young woman who became both deaf and blind at a young age. The book explores the challenges she faced growing up as a child with disabilities, and introduces the amazing people who helped her along the way.",
    //   price: 1999,
    //   available: true,
    //   image:
    //     "https://barbarah.files.wordpress.com/2018/04/helen-keller.jpg?w=584",
    // });
    // await newBook.save();
    
    await book.save();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(500).json({
      message: "Unable to add book !!",
    });
  }
  return res.status(201).json({
    message: "Book Data added successfully!",
    data: { book },
  });
};

const getBookById = async (req, res, next) => {
  //  to get id , we use:
  const id = req.params.id;

  let book;

  try {
    book = await Book.findById(id);
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(500).json({
      message: "No such book found!!",
    });
  }
  return res.status(201).json({
    message: "Book Found successfully!",
    data: { book },
  });
};

const updateBook = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;
  let book;

  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image,
    });

    book = await book.save();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(500).json({
      message: "Book Not Updated!!",
    });
  }
  return res.status(201).json({
    message: "Book Updated successfully!",
    data: { book },
  });
};

const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  let book;

  try {
    book = await Book.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(500).json({
      message: "Book Not Found!!",
    });
  }
  return res.status(201).json({
    message: "Book Deleted successfully!",
  });
};

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getBookById = getBookById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
