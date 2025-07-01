const myLibrary = []

const table = document.createElement('table');
table.classList.add('library');
document.body.appendChild(table);
    
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

function addBookToLibrary(title, author, numberOfPages, finished){
    myLibrary.push(new Book(title, author, numberOfPages, finished));
};

function displayLibrary(){
    myLibrary.forEach(Book =>{
        const row = document.createElement('tr');
        Object.values(Book).forEach(value =>{
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });
        table.appendChild(row);
    })};
