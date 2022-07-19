class Book {
    constructor(title, category, author){
    this.title = title;
    this.category = this.category;
    this.author = this.author;
    this.isRead = this.isRead;
    this.finishedDate = this.isRead;
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
        this.book = this.books.concat(books);
        return this.books;
    }
    getCurrentBook(){
        return this.books[this.currentIndexBook];
    }
    getNextBook(){
        return this.books[this.currentIndexBook + 1];
    }
    getPreviousBook(){
        return this.books[this.currentIndexBook - 1];
    }
    changeCurrentBook(index){
        this.currentIndexBook = index;
        return this.currentIndexBook;
    }
}