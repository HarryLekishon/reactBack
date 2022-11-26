const Book = require("../models/Book")

const getAllBooks = async (req, res, next) => {
    let books;
    try {
        books = await Book.find();
    } catch (err) {
        console.log(err)
    }

    if (!books) {
        return res.status(404).json({message: "No Book found"})
    }
    return res.status(200).json({books})
}

const getById = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
      book = await Book.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!book) {
      return res.status(404).json({ message: "No Book found" });
    }
    return res.status(200).json({ book });
  };

const addBook = async (req, res, next) => {
    const { name, author, description, date,location, time } = req.body
    let book;
    try {
       book =new Book({
        name,
        author,
        description,
        date,
        location,
        time
       })
       await book.save();
    }catch(err) {
        console.log(err);
    }

    if(!book) {
        return res.status(500).json({message:'unable to add'})
    }
    return res.status(201).json({message: 'BooK Successfully addded'})
};

const deleteBook = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findByIdAndRemove(id)
    }catch(err){
        console.log(err)
    }

    if (!book) {
        return res.status(404).json({ message: "Unable to delete book" });
      }
      return res.status(200).json({ message: "Book deleted" });
}


exports.getAllBooks = getAllBooks;
exports.getById = getById;
exports.addBook = addBook;
exports.deleteBook = deleteBook;
