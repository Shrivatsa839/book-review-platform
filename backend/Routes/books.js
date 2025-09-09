import express from "express";
const router = express.Router();

// In-memory book data
let books = [
  {
    _id: "1",
    title: "The Alchemist",
    author: "Paulo Coelho",
    description: "A novel about following your dreams."
  },
  {
    _id: "2",
    title: "1984",
    author: "George Orwell",
    description: "A dystopian novel about a totalitarian regime."
  }
];

// GET all books
router.get("/", (req, res) => {
  res.json(books);
});

// POST a new book
router.post("/", (req, res) => {
  const { title, author, description } = req.body;
  const newBook = { _id: Date.now().toString(), title, author, description };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT update a book
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, author, description } = req.body;

  const bookIndex = books.findIndex((b) => b._id === id);
  if (bookIndex === -1) return res.status(404).json({ message: "Book not found" });

  books[bookIndex] = { _id: id, title, author, description };
  res.json(books[bookIndex]);
});

// DELETE a book
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  books = books.filter((b) => b._id !== id);
  res.json({ message: "Book deleted" });
});

export default router;








