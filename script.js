'use strict';

let guess=Math.round(Math.random()*20)
document.querySelector('.number').textContent=guess

let score=document.querySelector('.score').textContent

document.querySelector('.check').addEventListener('click', function(){
    let no=Number(document.querySelector('.guess').value)
    console.log(no)
    if(!no){
        document.querySelector('.message').textContent="⛔️ No number in input"
        //displayMessage('⛔️ No number!');
    }
    else if(guess === no){
        document.querySelector('.message').textContent="🎉 Congratulations! correct number"
        document.querySelector('body').style.backgroundColor="green"
        document.querySelector('.number').style.width="30rem"
    }  
    else if(guess < no){
        document.querySelector('.message').textContent="📈 Too high"
        score=score-1
        document.querySelector('.score').textContent=score
    }  
    else if(guess > no){
        document.querySelector('.message').textContent="📉 Too low"
        score=score-1
        document.querySelector('.score').textContent=score
    } 
})