class Library {
  constructor() {
    this.bookArray = localStorage.getItem('bookstore') ? JSON.parse(localStorage.getItem('bookstore')) : [];
  }