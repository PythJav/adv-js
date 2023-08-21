const bookCon = document.querySelector(".bookList");


const myLibrary = [];


class Book{

  constructor(title,author,pages,read) {
    this.title= title
    this.author=author
    this.pages = pages
    this.read = read

  }
}

class createBook {

  constructor() {
    this.Book= new Book();

  }

  createBook(){

    newBook(){
      let newBook= this.Book(bookForm.title.value,bookForm.author.value,bookForm.pages.value,bookForm.readState.value);
   myLibrary.push(newBook);
   addBook();
    }

  

  
  toggleRead(){
    this.read=!this.read;
  }

  //toggleRead=function(){
  //   this.read=!this.read;
 
    
 
 
  //  }
 
   toggleRead(index){
   myLibrary[index].toggleRead();
   addBook();
   }

  }
}

  



// function Book(title,author,pages,read) {
//     this.title= title
//     this.author=author
//     this.pages = pages
//     this.read = read

//     // the constructor...
//   }

//   function createBook(){
//    let newBook= new Book(bookForm.title.value,bookForm.author.value,bookForm.pages.value,bookForm.readState.value)
//    myLibrary.push(newBook);
//    addBook();
//   }
  
//   Book.prototype.toggleRead=function(){
//    this.read=!this.read;

   


//   }

//   function toggleRead(index){
//   myLibrary[index].toggleRead();
//   addBook();
//   }

function addBook(){
  bookCon.innerHTML="";
  for(let i= 0; i <myLibrary.length;i++){
    let book= myLibrary[i];
    const newBook = document.createElement("div");
 

    const newTitle = document.createElement("div");
    newTitle.textContent= `Title: ${book.title}`;

    const newAuthor = document.createElement("div");
    newAuthor.textContent= `Author: ${book.author}`;

    const newPages = document.createElement("div");
    newPages.textContent= `Pages: ${book.pages}`;
    const newSwitch =document.createElement('button');
    newSwitch.setAttribute("onclick",`toggleRead(${i})`)
    newSwitch.textContent=`Switch Read`

    const newRead = document.createElement("div");
    // newRead,setAttribute("read-status",`book.read?"Read":"Not Read Yet"`);
    newRead.textContent= `Read: ${book.read?"Read":"Not Read Yet"}` ;

    const newDel = document.createElement("button");
    newDel.classList.add("delBut");
    newDel.setAttribute("onclick",`removeBook(${i})`)
    newDel.textContent=`Remove Book`;


    newBook.appendChild(newTitle);
    newBook.appendChild(newAuthor);
    newBook.appendChild(newPages);
    newBook.appendChild(newSwitch);


    newBook.appendChild(newRead);
    newBook.appendChild(newDel);

    bookCon.appendChild(newBook);
  }
}


  // function addBookToLibrary(i) {
  //   const newBook = document.createElement("div");
 

  //   const newTitle = document.createElement("div");
  //   newTitle.textContent= `Title: ${i.title}`;

  //   const newAuthor = document.createElement("div");
  //   newAuthor.textContent= `Author: ${i.author}`;

  //   const newPages = document.createElement("div");
  //   newPages.textContent= `Pages: ${i.pages}`;

  //   const newRead = document.createElement("div");
  //   newRead.textContent= `Read: ${i.read}`;

  //   const newDel = document.createElement("button");
  //   newDel.classList.add("delBut");
  //   newDel.setAttribute("onclick","return this.parentNode.remove()")
  //   newDel.textContent=`Remove Book`;


  //   newBook.appendChild(newTitle);
  //   newBook.appendChild(newAuthor);
  //   newBook.appendChild(newPages);
  //   newBook.appendChild(newRead);
  //   newBook.appendChild(newDel);

  //   bookCon.appendChild(newBook);


  // }
function showForm(){
  document.getElementById("bookForm").style.display="";
}
// function changeState{


// }

chaidef = new Book ("Funny","Me","10","read");
addBook(chaidef);

let delEach= document.querySelectorAll(".delBut");

// delEach.forEach((item)=>{
//   item.addEventListener("click",function(e){
//   e.currentTarget.parentNode.remove();
//   console.log("H1");



// })
  
//   // myLibrary.forEach(addBookToLibrary);
  
// });



function removeBook(index){
  myLibrary.splice(index,1);
  addBook();

}

document.getElementById("bookForm").addEventListener("submit",function(event){
  event.preventDefault();
  new createBook();
  // document.getElementById("bookForm").style.display="none";


  
})