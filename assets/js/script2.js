const addBtn = document.querySelector("[data-add-btn]")
const deleteAllBtn = document.querySelector("[data-delte-all]")
const inputTitle = document.querySelector(".new-note__input-title");
const inputText = document.querySelector(".new-note__input-text");
const noteBoard = document.querySelector(".noteboard");

function createNote( {titleValue, textValue,idValue} ){
    const note = document.createElement("div");
    note.classList.add("noteboard__note");

    note.innerHTML = `<img class="noteboard__pin-img" src="./assets/img/pin.png" alt="">
    <h2 class="noteboard__note-title">${titleValue}</h2>
    <p class="noteboard__note-content">${textValue}</p>
    <i class="fa-solid fa-trash-can noteboard__delete" id="${idValue}" data-delete-btn></i>`
    noteBoard.appendChild(note);
}

function saveNotes() {
    const titleValue = inputTitle.value;
    const textValue = inputText.value;
    const idValue = uuid.v4();
    const noteObj = {
        titleValue,
        textValue,
        idValue
    }
    localStorage.setItem(idValue, JSON.stringify(noteObj))
}

function saveId(){
    let idArray = [];
    for(let index = 0; index<localStorage.length; index++){
        if(localStorage.key(index) != "idArray"){
        idArray.push(localStorage.key(index));
        }
    }
    localStorage.setItem("idArray",JSON.stringify(idArray))
    return idArray;
}

function readNote() {
    if (localStorage.length > 0){
        JSON.parse(localStorage.getItem("idArray")).forEach(id => {
            createNote(JSON.parse(localStorage.getItem(id)))
        });
    }
}

addBtn.addEventListener("click", ()=>{
    saveNotes();
    saveId();
    location.reload();
})

noteBoard.addEventListener("click", function(e){
    
    localStorage.removeItem(e.target.id);
    saveId();
    location.reload()
    
});

readNote()