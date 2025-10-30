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
}