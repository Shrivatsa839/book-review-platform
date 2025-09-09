import express from "express";
import cors from "cors";
import bookRoutes from "./routes/books.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});








