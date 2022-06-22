const booksContent = document.querySelector('.displayBook');
const btn = document.getElementById('button');
const bookTitle = document.getElementById('name');
const authName = document.getElementById('author');

let bookArray = [];
let id = 0;

// oject constructor for contact

function Book(id, bookName, authName) {
    this.id = id;
    this.bookName = bookName;
    this.authName = authName;
  }


  // Find the last ID

function lastID(bookArray) {
    if (bookArray.length > 0) {
      id = bookArray[bookArray.length - 1].id;
    } else {
      id = 0;
    }
  }