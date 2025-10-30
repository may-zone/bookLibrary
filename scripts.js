const bookList=[];

function Book(title,author,genre,pages,read = false){
    this.title=title;
    this.author=author;
    this.genre=genre;
    this.pages=pages;
    this.read=read;
    this.id = crypto.randomUUID();

}
function addBookToLibrary(title,author,genre,pages,read){
    const newBook = new Book(title,author,genre,pages,read);
    bookList.push(newBook);
    render();
}
addBookToLibrary("1984", "George Orwell", "Dystopian", 328, true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "Fantasy", 310, false);
addBookToLibrary("یک عاشقانه آرام", "نادر ابراهیمی", "عاشقانه", 237 ,false);

function render(){
    const container = document.querySelector('.booth');
    bookList.forEach(Book =>{
        const card = document.createElement('.div');
        card.classList.add('card');
        card.innerHTML =`
              <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Genre:</strong> ${book.genre}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Read:</strong> ${book.read ? '✅ Yes' : '❌ No'}</p>
      <button class="remove-btn" data-id="${book.id}">Remove</button>`;
      container.appendChild(card);

    });
}