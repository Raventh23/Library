const MyLibrary = []

function Book(title){
    if (!new.target) {
        throw Error("you must use the 'new' operator to make a new book")
    }
    this.title = title;
    this.id = crypto.randomUUID();
}

let classic = new Book('hobbit');
console.log(classic);