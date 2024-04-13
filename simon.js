let gameSeq = [];
let userSeq = [];
let bts = ["first","second","third","forth"];
let started = false ;
let level = 0 ;
let max = 0;

let h4= document.querySelector("h4");
let h3= document.querySelector("h3");

let start = document.querySelector(".simon");
start.addEventListener("click",function(){
   if(started == false){
    console.log("game started");
    started = true ;}
    levelup();
    h3.innerText="";
})

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
    btn.classList.remove("flash")
    } , 200);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
    btn.classList.remove("userflash")
    } , 200);
}

function levelup(){
    userSeq =[];
    level++ ;
    h4.innerText = `Level ${level}` ;

    let ram = Math.floor( Math.random()*3);
    let ramcol = bts[ram];
    let rambtn = document.querySelector(`.${ramcol}`);
    gameSeq.push(ramcol);
    btnflash(rambtn);
}

function check(idx){

    if(gameSeq[idx]===userSeq[idx]){
        if(gameSeq.length==userSeq.length){
           setTimeout(levelup,1500) ;
        }
    }
    else{
        h4.innerHTML=`Game over! . Your score is <b> ${level}</b> <br> press again to start the game`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },500);
        highscore();
        reset();
    }
}
function btnpress(){
    console.log("btn pressed");
    let btn = this;
    userflash(btn);

    let usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    check(userSeq.length-1);
   
}

let btns = document.querySelectorAll(".btn");
for (btn of btns ){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

function highscore(){
    if (max<=(level-1)){
        max = level ;
    }
    h3.innerText = `highest score : ${max}`;

}