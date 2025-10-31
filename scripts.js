const bookList = [];

function Book(title, author, genre, pages, read = false) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}
function addBookToLibrary(title, author, genre, pages, read) {
  const newBook = new Book(title, author, genre, pages, read);
  bookList.push(newBook);
  render();
}
addBookToLibrary("1984", "George Orwell", "Dystopian", 328, false);
addBookToLibrary("یک عاشقانه آرام", "نادر ابراهیمی", "عاشقانه", 237, true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "Fantasy", 310, true);

function render() {
  const container = document.querySelector(".booth");
  container.innerHTML = "";
  bookList.forEach((Book) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
              <h3>${Book.title}</h3>
      <p><strong>Author:</strong> ${Book.author}</p>
      <p><strong>Genre:</strong> ${Book.genre}</p>
      <p><strong>Pages:</strong> ${Book.pages}</p>
      <p>  <strong>Read:</strong> 
  <span class="read-toggle" data-id="${Book.id}">
    ${Book.read ? "✅" : "❌"}
  </span></p>
      <span class="remove-btn" data-id="${Book.id}"></span>`;
    container.appendChild(card);const toggle = card.querySelector('.read-toggle');
toggle.addEventListener('click', () => toggleReadStatus(Book.id));

const remove = card.querySelector('.remove-btn');
remove.addEventListener('click', () => removeBook(Book.id));
  });
}

function removeBook(id) {
  const index = bookList.findIndex((book) => book.id === id);
  if (index !== -1) {
    bookList.splice(index, 1);
    render();
  }
}
function toggleReadStatus(id) {
  const book = bookList.find((b) => b.id === id);
  if (book) {
    book.read = !book.read;
    render();
  }
}

const addBookBtn = document.getElementById("bookInfo");
const formContainer = document.querySelector(".form");
const closeFormBtn = document.getElementById("closeForm");
const bookForm = document.getElementById("bookForm");

addBookBtn.addEventListener("click", () => {
  formContainer.style.display = "flex";
});
closeFormBtn.addEventListener("click", () => {
  formContainer.style.display = "none";
});

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const genre = document.getElementById("genre").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;
  addBookToLibrary(title, author, genre, pages, read);

  bookForm.reset();
  formContainer.style.display = "none";
});
