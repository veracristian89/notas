const addButton = document.querySelector(".new-note__add-button");

const inputTitle = document.querySelector(".new-note__input-title");
const inputText = document.querySelector(".new-note__input-text");
const noteBoard = document.querySelector(".noteboard");

function createNote( {titleValue, textValue,idValue} ){
    const note = document.createElement("div");
    note.classList.add("noteboard__note");
    note.setAttribute("id", idValue);

    note.innerHTML = `<img class="noteboard__pin-img" src="./assets/img/pin.png" alt="">
    <h2 class="noteboard__note-title">${titleValue}</h2>
    <p class="noteboard__note-content">${textValue}</p>
    <i class="fa-solid fa-trash-can noteboard__delete" id="${idValue}" data-delete-btn></i>`
    noteBoard.appendChild(note);
}

function readNote(){
    const noteList = JSON.parse(localStorage.getItem("notes")) || [];
    noteList.forEach(note => createNote(note));
}

addButton.addEventListener("click", function(){
    
    let titleValue = inputTitle.value;
    let textValue = inputText.value;
    let idValue = uuid.v4();
    const noteObj = {
        titleValue,
        textValue,
        idValue
    };

    const noteList = JSON.parse(localStorage.getItem("notes")) || [];
    noteList.push(noteObj);
    localStorage.setItem("notes", JSON.stringify(noteList));
    createNote({titleValue, textValue, idValue});
    inputTitle.value = "";
    inputText.value = "";    

});

readNote();


noteBoard.addEventListener("click", function(e){
    console.log(e.target.id)
    
});