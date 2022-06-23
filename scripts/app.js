class Library {
  constructor() {
    this.bookArray = localStorage.getItem('bookstore') ? JSON.parse(localStorage.getItem('bookstore')) : [];
  }

  addNewBook(book) {
    this.bookArray.push(book);
    localStorage.setItem('bookstore', JSON.stringify(this.bookArray));
  }

  removeBook(id) {
    this.bookArray = this.bookArray.filter((book) => book.id !== Number(id));
    localStorage.setItem('bookstore', JSON.stringify(this.bookArray));
  }
}

const booksContainer = document.querySelector('.displayBook');
const btn = document.getElementById('button');
const title = document.getElementById('title');
const author = document.getElementById('author');
const bookList = new Library();
const newBooks = bookList.bookArray;