let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newBt=document.querySelector("#newGame");
let msgcont=document.querySelector(".msgcontent");
let msgs=document.querySelector("#msg");
let dr=document.querySelector("#draw");
let drcont=document.querySelector(".Draw")


let count=0;
let turn0=true;


const winpatterns=[
    [0, 1 ,2],
    [0, 3 ,6],
    [0, 4 ,8],
    [1, 4 ,7],
    [2, 5 ,8],
    [2, 4 ,6],
    [3, 4 ,5],
    [6, 7 ,8],
];




const resetgame=()=>{
    turn0=true;
    count=0;
    enablebox();
    msgcont.classList.add("hide");

}




boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("Box is Clicked");
        if(turn0){
            box.innerText="O";
            turn0=false
        }
        else{
            box.innerText="X";
            turn0=true

        }
        box.disabled=true;
        count++;

        let iswinner=checkWinner();
        if(count===9&&!iswinner){
            gamedraw();
        }
        console.log(count)


    });

});



const gamedraw=()=>{
    msgs.innerText="Game Is Draw";
    msgcont.classList.remove("hide")
    disablebox();
}



const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}



const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}



const showWinner=(win)=>{
    msgs.innerText=`Congratulation,Winner is Player ${win}`;
    msgcont.classList.remove("hide")
    disablebox();
}



const checkWinner=()=>{
    for(let pat of winpatterns){
        let pos1=boxes[pat[0]].innerText;
        let pos2=boxes[pat[1]].innerText;//Taking Each Value Of Boxes Etier "O" or "X"
        let pos3=boxes[pat[2]].innerText;

        if(pos1!="" &&pos2!="" && pos3!=""){
            if(pos1===pos2&&pos2===pos3){
                console.log("Winner",pos1)
                showWinner(pos1);
                return true;
            }

            }
            }
        };



newBt.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);