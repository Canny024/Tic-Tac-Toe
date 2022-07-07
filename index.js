
let ting = new Audio("ting.mp3");
let gameover = new Audio("win.wav");
let turn ="X";
let isgameOver = false;
let sw = screen.width;
const changeTurn = ()=>{
    return turn === "X" ? "O": "X";
}
const checkWin = ()=>{
let boxtext = document.getElementsByClassName('boxtext');
let wins = [
    [0,1,2,5,5,0,5,10],[3,4,5,5,15,0,5,30],[6,7,8,5,25,0,5,50],[0,3,6,-5,15,90,-15,30],[1,4,7,5,15,90,5,30],[2,5,8,15,15,90,25,30],[0,4,8,5,15,45,5,30],[2,4,6,5,15,135,5,30]
]
wins.forEach(e=>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=="") ){
        document.querySelector('.info').innerText = boxtext[e[0]].innerText + " WON";
        isgameOver = true;
        gameover.play();
        let reset = document.getElementById("reset");
        
        reset.innerText="PLAY AGAIN";
        
        
        if(sw<= 500){document.querySelector(".line").style.width = "50vw";
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        document.querySelector(".line").style.transform = `translate(${e[6]}vw,${e[7]}vw) rotate(${e[5]}deg)`;}
        else{document.querySelector(".line").style.width = "20vw";
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "300px";
        document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;}
    }
})
}



// Game Logic

let boxes = document.getElementsByClassName("box");
// music.play();
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
       
        if(boxtext.innerText==''){
            boxtext.innerText = turn;
            turn =changeTurn();
            ting.play();
            ting.currentTime = 0;
            checkWin();
            if(!isgameOver){
            document.getElementsByClassName("info")[0].innerText = "TURN FOR " + turn;}
        }
    })
})


reset.addEventListener('click', (e)=>{
let boxtexts = document.querySelectorAll('.boxtext');
if(reset.innerText=="PLAY AGAIN"){reset.innerText="RESET";}
Array.from(boxtexts).forEach(element=>{
    element.innerText = ""
})
turn = "X";
isgameOver =false;
document.getElementsByClassName("info")[0].innerText = "TURN FOR " + turn;
document.querySelector(".line").style.width = "0vw"
document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";

})