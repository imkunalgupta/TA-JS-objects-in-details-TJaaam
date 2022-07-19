class Book {
    constructor(title, category, author){
    this.title = title;
    this.category = this.category;
    this.author = this.author;
    this.isRead = false;
    this.finishedDate = null;
  }
  markBookAsRead(){
    this.isRead = true;
    this.finishedDate = Date.now();
  }
}



class BookList {
    constructor(){
        this.books = [];
        this.currentIndexBook = 0;
    }
    add(books = []){
        this.books = this.books.concat(books);
        return this.books;
    }
    getCurrentBook(){
        return this.books[this.currentIndexBook];
    }
    getNextBook(){
        this.currentIndexBook = this.currentIndexBook + 1;
        return this.books[this.currentIndexBook];
    }
    getPreviousBook(){
        this.currentIndexBook = this.currentIndexBook - 1;
        return this.books[this.currentIndexBook];
    }
    changeCurrentBook(index){
        this.currentIndexBook = index;
        return this.currentIndexBook;
    }
}
let book1 = new Book("To Kill a Mockingbird", "Non Fiction", "KK");
let book2 = new Book("Harry Potter", "Fiction", "J.K. Rowlling");
let book3 = new Book("The Lord of the Ring", "Fiction", "J.R.R Tolkien");
let book4 = new Book("The Great Gatsby", "Fiction", "F.Scott");
let book5 = new Book("Pride and Prejudice", "Non Fiction", "Jane Austin");



let library = new BookList();

library.add([book1, book2, book3, book4, book5]);