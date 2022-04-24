const addButton = document.querySelector(".new-note__add-button");
const deleteButton = document.querySelector(".noteboard__delete")

const inputTitle = document.querySelector(".new-note__input-title");
const inputText = document.querySelector(".new-note__input-text");
const noteBoard = document.querySelector(".noteboard");

function createNote( {titleValue, textValue} ){
    const note = document.createElement("div");
    note.classList.add("noteboard__note");
    noteBoard.appendChild(note)

    const notePin = document.createElement("img");
    notePin.classList.add("noteboard__pin-img");
    notePin.src = "./assets/img/pin.png"
    note.appendChild(notePin)

    const noteTitle = document.createElement("h2");
    note.appendChild(noteTitle)
    noteTitle.innerHTML = (titleValue);
    noteTitle.classList.add("noteboard__note-title");

    const noteContent = document.createElement("p");
    note.appendChild(noteContent)
    noteContent.innerHTML = (textValue);
    noteContent.classList.add("noteboard__note-content");

    const noteDeleteButon = document.createElement("i");
    note.appendChild(noteDeleteButon);
    noteDeleteButon.classList.add('fa-solid', 'fa-trash-can', 'noteboard__delete');
}

function readNote(){
    const noteList = JSON.parse(localStorage.getItem("notes")) || [];
    noteList.forEach(note => console.log(createNote(note)))
}

addButton.addEventListener("click", function(){
    
    let titleValue = inputTitle.value;
    let textValue = inputText.value;
    const noteObj = {
        titleValue,
        textValue
    };

    const noteList = JSON.parse(localStorage.getItem("notes")) || [];
    noteList.push(noteObj);
    localStorage.setItem("notes", JSON.stringify(noteList));
    createNote({titleValue, textValue});
    inputTitle.value = "";
    inputText.value = "";    

});

readNote();

