const squares=Array.from(document.querySelectorAll(".container div"))
const bt=Array.from(document.querySelectorAll(".teclado div"))
const input=document.querySelector(".input")
const typed=document.querySelector(".typed")
let k=1;
let word;
let real_word;
const container=document.querySelector(".container")
var booleano=true;

show_word=()=>{
    if(k>35){
        alert("You lost")
    }else{
        squares[k].textContent=word[0].toUpperCase();
        squares[k+1].textContent=word[1].toUpperCase();
        squares[k+2].textContent=word[2].toUpperCase();
        squares[k+3].textContent=word[3].toUpperCase();
        squares[k+4].textContent=word[4].toUpperCase();
       
    }

}

check_win=()=>{
    if(word===real_word){
        alert("You won");
    }
    for(var i=0;i<5;i++){   
        var isit=false
        if(word[i]===real_word[i]){
            squares[k+i].style.backgroundColor = "#3aa394";
            isit=true
            for(var j=0;j<29;j++){
                if(bt[j].textContent===word[i].toUpperCase()){
                    bt[j].style.backgroundColor = "#3aa394";
                }
            }
        }else{
            for(var j=0;j<5;j++){ 
                if(i!=j){
                    if(word[i]===real_word[j]){
                        squares[k+i].style.backgroundColor = "#d3ad69";
                        isit=true;
                        for(var j=0;j<29;j++){
                            if(bt[j].textContent===word[i].toUpperCase()){
                                bt[j].style.backgroundColor = "#d3ad69";
                            }
                        }
                    }
                }
            }
        }
        if(!isit){
            squares[k+i].style.backgroundColor = "#423237";
            for(var j=0;j<29;j++){
                if(bt[j].textContent===word[i].toUpperCase()){
                    bt[j].style.backgroundColor = "#423237";
                }
            }
        }
    }
    k+=6
}

document.addEventListener("keydown",(event)=>{
    if (event.key === "Enter") {
        if(input.value.length==5){
            if(booleano){
                real_word=input.value;
                input.value="";
                typed.textContent="TERMO";
                booleano=false; 
            }else{
                word=input.value;
                show_word();
                input.value="";
                check_win();  
            }
        }
    }
})  
