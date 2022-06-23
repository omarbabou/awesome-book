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

const booksContent = document.querySelector('.displayBook');
const btn = document.getElementById('button');
const title = document.getElementById('title');
const author = document.getElementById('author');
const bookList = new Library();
const newBooks = bookList.bookArray;

function displayBook(book) {
  const newAddDiv = document.createElement('div');
  const booksContainer = document.querySelector('.displayBook');
  newAddDiv.classList.add('bookItem');
  newAddDiv.id = book.id;
  newAddDiv.innerHTML = `<ul class="book-content">   
                              <li class = "title">${book.title}</li>
                              <li>${book.author}</li>
                          </ul>
                          <button id="remove">Remove</button>
  `;
  booksContainer.appendChild(newAddDiv);
}