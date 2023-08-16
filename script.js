const bookCon = document.querySelector(".bookList");


const myLibrary = [];

function Book(title,author,pages,read) {
    this.title= title
    this.author=author
    this.pages = pages
    this.read = read

    // the constructor...
  }

  function createBook(){
    new Book(bookForm.title.value,bookForm.author.value,bookForm.pages.value,bookForm.title.read)
    console.log("Hello")
  }
  
  function addBookToLibrary(i) {
    const newBook = document.createElement("div");

    const title = document.getElementById("title").value;

    const newTitle = document.createElement("div");
    newTitle.textContent= `Title: ${title}`


    const newAuthor = document.createElement("div");
    newAuthor.textContent= `Author: ${title}`
    const newPages = document.createElement("div");
    newPages.textContent= `Pages: ${title}`
    const newRead = document.createElement("div");

    newBook.appendChild(newTitle);
    newBook.appendChild(newAuthor);
    newBook.appendChild(newPages);
    newBook.appendChild(newRead);
    bookCon.appendChild(newBook);


  }

// function changeState{


// }

chaidef = new Book ("Funny","Me","10","read");
addBookToLibrary(chaidef);