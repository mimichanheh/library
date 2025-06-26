const myLibrary = [];
// function Book(name, author, pages, read) {
//     this.name = name;
//     this.pages = pages;
//     this.author = author;
//     this.read = read;
//     this.id = crypto.randomUUID();
// }
// Book.prototype.display = function(){
//     return this.id+" : "+this.name+" by "+this.author+", "+this.pages+", "+this.read;
// }
function addBookToLibrary(name, author, pages, read){
    let book = new Book(name, author, pages, read);
    myLibrary.push(book);
}
function displayBooks(){
    for(let i=0 ; i<myLibrary.length ; i++){
        console.log(myLibrary[i].display());
    }
}
class Book {
    name;
    pages;
    author;
    read;
    id;
    constructor(name, pages, author, read) {
        this.name = name;
        this.pages = pages;
        this.author = author;
        this.read = read;
        this.id = crypto.randomUUID();
    }
    display() {
        return this.id+" : "+this.name+" by "+this.author+", "+this.pages+", "+this.read;
    }
}
// function main() {
//     addBookToLibrary("The Bell Jar", "Sylvia Plath", 345, "currently reading");
//     addBookToLibrary("The war of the worlds", "H.G.Wells", 380, "currently reading");
//     addBookToLibrary("Persuasion", "Jane Austen", 290, "read");
//     displayBooks();
// }
// main();
const show = document.getElementById("book");
const dialog = document.querySelector("dialog")
const close = document.getElementById("cancel")
show.addEventListener("click", () => {
    dialog.showModal();
})
close.addEventListener("click", () => {
    dialog.close();
})
document.getElementById("form").addEventListener("submit",
    function(event){
        event.preventDefault();
        const title = document.getElementById("title").value ;
        const author = document.getElementById("author").value ;
        const pages = Number(document.getElementById("num-pages").value) ;
        const state = document.getElementById("state").value ;
        addBookToLibrary(title, author, pages, state);
        const newElement = document.createElement("p");
        newElement.textContent = title+" by "+author+", composed of "+pages+" pages, "+state;
        document.getElementById("books-container").appendChild(newElement)
        this.reset();
        dialog.close()
    }
)
console.log(myLibrary)