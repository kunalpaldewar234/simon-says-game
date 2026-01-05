let gameSeq = [];
let userseq = [];
let butns = ["red","yellow","green","purple"];
let lavel = 0;
let started = false;

let hedding = document.querySelector("h2");
let sart = addEventListener("keypress" ,function(){
    if(started == false){
        console.log("Game started.")
        started = true;
        levelup();
    }
});
function gameflash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    },250)
}
function userflash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250)
}
function levelup(){
    userseq =[];
    lavel++;
    hedding.innerText = `Level = ${lavel}`;
    let randIdx = Math.floor(Math.random()*3)+1;
    let randColor = butns[randIdx];
    let ranBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(ranBtn);
}
function check(idx){
    
    if(userseq[idx] == gameSeq[idx]){
        if(userseq.length == gameSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        hedding.innerHTML =`Game over! Your score was <b>${lavel}</b> <br> press any key to start game.`
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="white";
        },150);
        reset();
    }
}
function btnpress(){
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor)
    check(userseq.length-1);
}
let allbtns = document.querySelectorAll(".box");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started = false;
    gameSeq =[];
    userseq = [];
    lavel = 0;
}