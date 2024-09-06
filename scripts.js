let body = document.body;
let header = document.querySelector('.header');
let theme = document.querySelector('.theme');
let container = document.querySelector('.container');
let box = document.querySelector('.box');
let score = document.querySelector('.score');
let user_score = document.querySelector('.user_score');
let cmp_score = document.querySelector('.cmp_score');
let result = document.querySelector('#result_text');
let box1 = document.querySelector('#box1');
let box2 = document.querySelector('#box2');
let box3 = document.querySelector('#box3');

let list_choice = ["Stone","Paper","Scissor"];
const getcmp_choice =() =>{
    var idx = Math.floor(Math.random() *3);
    return(list_choice[idx]);
}
var cmp_choice = getcmp_choice();

theme.onclick = () => {
    body.classList.toggle('dark_mode');
    theme.classList.toggle('dark_mode2');
    if(theme.innerText === "Dark Mode") theme.innerText = "Light Mode";
    else theme.innerText = "Dark Mode";
}
box1.onclick = () =>{
    if(cmp_choice === "Stone"){
        result.innerText = "It's a tie";    
    }
    else if(cmp_choice == "Scissor"){
        result.innerText = "You Won!, stone beats scissor";
        user_score.innerText++;
    }
    else{
        result.innerText = "You Lost!, paper beats stone";
        cmp_score.innerText++;
    }
    cmp_choice = getcmp_choice();
}

//paper
box2.onclick = () =>{
    if(cmp_choice === "Stone"){
        result.innerText = "You Won!, paper beats stone";    
        user_score.innerText++;
    }
    else if(cmp_choice === "Scissor"){
        result.innerText = "You Lost!, scissor beats paper";
        cmp_score.innerText++;
    }
    else{
        result.innerText = "It's a tie";
    }
    cmp_choice = getcmp_choice();
}

//scissor
box3.onclick = () =>{
    if(cmp_choice === "Stone"){
        result.innerText = "You Lost!, stone beats scissor";
        cmp_score.innerText++;    
    }
    else if(cmp_choice === "Scissor"){
        result.innerText = "It's a tie";
    }
    else{
        result.innerText = "You Won!, scissor beats paper";
        user_score.innerText++;
    }
    cmp_choice = getcmp_choice();
}