'use strict';

let check_btn = document.querySelector(".check") ;
let input_number = document.querySelector(".guess") ;
let msg = document.querySelector(".message") ;
let num = document.querySelector(".number") ;
let score_msg = document.querySelector(".score") ;
let high_score_msg = document.querySelector(".highscore") ;
let again_btn = document.querySelector(".again") ;
let bd = document.querySelector("#body")

let secret_number = parseInt(Math.random()*20) + 1;
let game_end = false ; 
let score = 20 ;
let high_score = 0 ;



function reset(){
    
    num.innerHTML = "?";
    score = 20 ;
    score_msg.innerHTML = score ;
    msg.innerHTML = "Start guessing..." 
    document.body.style.background = "#222"
    game_end = false ;
    secret_number = parseInt(Math.random()*20) + 1;

}

function just_check( val ){

    if(!game_end && score > 0){
        
        if(val==secret_number ){
            
            num.innerHTML = secret_number ;
            high_score = Math.max(high_score , score ) ;
            
            msg.innerHTML = " You guess right ";
            
            score_msg.innerHTML = score ;

            high_score_msg.innerHTML = high_score ;
            document.body.style.background = "rgb(124,252,0)"

            game_end =  true ; 
            return;
        
        }
        else if(val<secret_number){
            
            score--;

            msg.innerHTML = "Too Low";
            score_msg.innerHTML = score ;

            
            return;
        }
        else if(val>secret_number){
            
            score--;

            msg.innerHTML = "Too High";
            score_msg.innerHTML = score ;
            
            return;
        }
        
    }
    else{
        msg.innerHTML = "Game End";
    }

}

function trigger(){
    
    if(game_end){
        reset();
        return;
    }

    let guess_num = input_number.value ;
    if(guess_num.length > 0){
        guess_num = parseInt(guess_num) ;
        just_check(guess_num) ;
    }

}

check_btn.addEventListener("click" , function(){
    trigger() ;
} )

input_number.addEventListener("keyup" , event1 =>{
    if (event1.keyCode === 13) {
        trigger();
    }

})

again_btn.addEventListener("click" , function(){
    reset() ;
} )