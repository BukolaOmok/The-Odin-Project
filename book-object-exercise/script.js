function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

Book.prototype.info = function () {
    return this.title + " by " + this.author + ', ' + this.pages + ", " + this.readStatus
}

let book1 = new Book("Let Me In", "Claire McGowan", 500, "read");
let bookInfo = book1.info();
console.log(bookInfo);



