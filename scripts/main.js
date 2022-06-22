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

  // Add boooks to the DOM

function addNewBook(item) {
    const newAddDiv = document.createElement('div');
    newAddDiv.classList.add('bookItem');
    newAddDiv.id = item.id;
    newAddDiv.innerHTML = `<ul class="book-content">
                                
                                <li>${item.bookName}</li>
                                <li>${item.authName}</li>
                            </ul>
                            <button id="remove">Remove</button>
    `;
    booksContainer.appendChild(newAddDiv);
  }