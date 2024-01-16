let SelectTextAndColor = document.querySelector(".text_and_color").children;
// console.log(SelectTextAndColor); 

let SelectButton = document.querySelector("button");
// console.log(SelectButton);
let rightSideNotes = document.querySelector(".rightSideNotes");

let btn2 = document.querySelectorAll(".btn2");
// console.log(btn2);

SelectButton.addEventListener("click", () => {
    // let textValue = SelectTextAndColor[0].value;
    let colorValue = SelectTextAndColor[1].value;
    // console.log(textValue);
    // console.log(colorValue);
    if(SelectTextAndColor[0].value === ""){
        alert("Enter Some Text");
        return;
    }
    CreateStickyNote(SelectTextAndColor[0].value,colorValue);
    SelectTextAndColor[0].value = "";
    document.querySelector(".notesAdded").style.display = "none";
    removeCrossButton();
});

function removeCrossButton(){

    let rightcorner = document.querySelector(".rightcorner");

    rightcorner.addEventListener("click",(event)=>{
        if(event.target.innerText === "X"){
            event.target.parentElement.remove();
        }
    });
}

function CreateStickyNote(text,color){
    let div = document.createElement("div");
    div.innerHTML = `
    <p>${text}</p>
    <button class="btn2">X</button>
    `;
    
    div.style.backgroundColor = color;
    rightSideNotes.appendChild(div);
}



