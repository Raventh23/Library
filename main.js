const myLibrary = []

function Book(title, author, numberOfPages, finished){
    if (!new.target) {
        throw Error("you must use the 'new' operator to make a new book")
    }
    this.title = title;
    this.author = author
    this.numberOfPages = numberOfPages
    this.finished = finished
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title){
    myLibrary.push(new Book(title));
};

function displayLibrary(){
    console.log(myLibrary);
};