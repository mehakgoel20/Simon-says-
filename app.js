let gameSeq=[];
let userSeq=[];

let btns=["yellow","purple","green","red"];

 let started = false;
 let level=0;

 let h2 = document.querySelector("h2");

 document.addEventListener("keypress" , function () {
   if(started == false){
    // console.log("game started");
    started = true;

    levelUp();
    }
 });

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

}
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);
}

 function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    //random btn ko choose bhi karna hai 
    let randIdx= Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randbtn= document.querySelector(`.${randColor}`);
    // console.log(randColor);
    // console.log(randIdx);
    // console.log(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
 }

function checkAns(idx){
    // console.log("curr level :",level);
    // let idx = level-1; yeh toh fixed index hai 


    if(userSeq[idx]===gameSeq[idx]){
            // console.log("same value");
            if(userSeq.length === gameSeq.length){
             setTimeout(levelUp,1000);
             userSeq=[];
        }
    }
    else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b>.<br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

 function btnPress() { 
    // console.log(this);
   let btn= this;
   userFlash(btn);

   let userColor = btn.getAttribute("id");
   userSeq.push(userColor);

   checkAns(userSeq.length - 1);
 }

 let allBtns = document.querySelectorAll(".btn");
 for ( let btn of allBtns){
    btn.addEventListener("click", btnPress);
 }

 function reset(){
    started = false;
    gameSeq =[];
    userSeq=[];
    level = 0;
 }