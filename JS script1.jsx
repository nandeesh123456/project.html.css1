let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelectorAll("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgcontainer= document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; // playerX, playerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
 const resetGame =() => {
    turn0 = true;
    enableboxes();
    msgcontainer.classList.add("hide");
 }

boxes.forEach((box) => {
    box.addEventListener("click",() => {
       if(turn0){   //playerO                          /*chech condetion if === true , then,,,*/
        box.innerText = "O";
        turn0 = false;
       }else{  //playerX
        box.innerText = "x";
        turn0 = true;
       }
       box.disabled = true;

       checkWinner();
    });
});
const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableboxes =() => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
 
const showWinner = (winner)=>{
    msg.innerText = `congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

//function
const checkWinner = () => {
    for(let pattern of winPatterns){

                let pas1Val = boxes[pattern[0]].innerText;
                let pas2Val = boxes[pattern[1]].innerText;
                let pas3Val = boxes[pattern[2]].innerText;

                if(pas1Val !="" && pas2Val !="" && pas3Val !=""){    // position checking and not empty
                   if(pas1Val === pas2Val && pas2Val === pas3Val){   
                       showWinner(pas1Val);
                   }

                }


    }
};
newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click",resetGame);