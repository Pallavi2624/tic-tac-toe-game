let boxes = document.querySelectorAll(".box"); // Selects all elements with the class "box"
let restart = document.querySelector("#restart");
let newgamebtn = document.querySelector('#new-btn');
let msgcontainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');


let turn_O = true; // Player 1, Player 2

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 7],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if (turn_O === true) {
            box.innerText = "O";
            turn_O = false;
        } else {
            box.innerText = "X"
            turn_O = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

  const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
  }

  const resetgame =() => {
    turn_O = true;
    enableboxes();
    msgcontainer.classList.add("hide");
  };

  const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
  }

const showwinner =(winner) => {
    msg.innerText = `Congratulations! The winner is ${winner}`;
    msgcontainer.classList.remove("hide");
        disableboxes();
}

const checkWinner = () => {
    for ( let pattern of winPatterns) {
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //      boxes[pattern[0]].innerText,
        //      boxes[pattern[1]].innerText,
        //      boxes[pattern[2]].innerText 
        //     );

        let pos1val = boxes[pattern[0]].innerText,
            pos2val = boxes[pattern[1]].innerText,
            pos3val = boxes[pattern[2]].innerText

        if(pos1val !="" && pos2val != "" && pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos1val)
                showwinner(pos1val);
            }
        }

    }
};

newgamebtn.addEventListener("click",resetgame);
restart.addEventListener("click",resetgame);


