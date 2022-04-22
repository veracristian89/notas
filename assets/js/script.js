const addButton = document.querySelector(".new-note__add-button");

const inputTitle = document.querySelector(".new-note__input-title");
const inputText = document.querySelector(".new-note__input-text");
const noteBoard = document.querySelector(".noteboard");

function createNote(title, content){
    const note = document.createElement("div");
    note.classList.add("noteboard__note");
    noteBoard.appendChild(note)

    const notePin = document.createElement("img");
    notePin.classList.add("noteboard__pin-img");
    notePin.src = "./assets/img/pin.png"
    note.appendChild(notePin)

    const noteTitle = document.createElement("h2");
    note.appendChild(noteTitle)
    noteTitle.innerHTML = (title);
    noteTitle.classList.add("noteboard__note-title");

    const noteContent = document.createElement("p");
    note.appendChild(noteContent)
    noteContent.innerHTML = (content);
    noteContent.classList.add("noteboard__note-content");
}

addButton.addEventListener("click", function(event){
    event.preventDefault();
    let titleValue = inputTitle.value;
    let textValue = inputText.value;
    const noteObj = {
        titleValue,
        textValue
    }
    localStorage.setItem("notes", JSON.stringify(noteObj))
    createNote(titleValue, textValue)
    inputTitle.value = ""
    inputText.value = ""
    

});