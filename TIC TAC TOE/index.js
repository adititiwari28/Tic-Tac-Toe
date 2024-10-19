let boxes= document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msg= document.querySelector(".para")
let newg= document.querySelector("#new");
   
let turn0= true;

      //    0   1   2                    [0 1 2][3 4 5][6 7 8]  row 
      //    3   4   5    wining patters  [0 3 6][1 4 7][2 5 8]  column    
      //    6   7   8                    [0 4 8 ][2 4 6]        diagonal

const winPattern=[
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

//addeventListner for each box
 
let count= 0;  
let gameOver= false;

boxes.forEach( (box) =>{
box.addEventListener("click",()=>{
    console.log("box");
    if(turn0){
        box.innerHTML="O";
        turn0= false;
        
    }
    else{
        box.innerHTML="X";
        turn0= true;
       

    }
    box.disabled=true;
    count++;
    checkWinner();
        console.log(count);
    if(count===9){
       draw();
    }
    
    })
});

//reset button eventlist




//arrow function name(params) {
//reset button newbuttton
const resetGame= ()=>{
    turn0= true;
    enableBox();
    msg.classList.add("hide");
    count=0;

}



  const enableBox= ()=>{
    for(let box of boxes){
        box.disabled=false; 
        box.innerText="";
    }
  }



 const disabledbox= ()=>{
    for(let box of boxes){
        box.disabled=true; 
    }
 }


const showwinner= (winner)=>{
    msg.innerText=`WINNER IS ${winner}`;
    msg.classList.remove("hide");
    disabledbox();
}
     
const checkWinner= ()=>{
    for( let pattern of winPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 !="" ){
            if(pos1===pos2 &&pos2===pos3){
              console.log("winner");
              showwinner(pos1);
          
            }
            }

    }
};
 const draw= ()=> {
    msg.innerHTML="DRAW - NO ONE WON";
    msg.classList.remove("hide");
    count=0;
 }

newg.addEventListener("click", resetGame);
reset.addEventListener("click",resetGame );
