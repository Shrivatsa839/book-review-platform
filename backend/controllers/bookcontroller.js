// backend/controllers/bookController.js
import Book from "../models/Book.js";

// GET all books
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST a new book
export const addBook = async (req, res) => {
  const { title, author, description } = req.body;
  const newBook = new Book({ title, author, description });

  try {
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT update book
export const updateBook = async (req, res) => {
  const { title, author, description } = req.body;
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, description },
      { new: true }
    );
    res.json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE a book
export const deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: "Book deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

