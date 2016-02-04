function youWon(){
    if(score > 41 && lives > 0){
        youWonBool = true;
    }
}

function gameOver(){
    if(lives === 0){
        gameOverBool = true;
    }
}



var begin = false;
var score = 0;
var lives = 3;
function scoreBoard(ctx){
    
    ctx.fillStyle = "white";              
    ctx.font="bold 17px Arial";
    ctx.textAlign="center";
    ctx.fillText("Score: " + score , 40, 390 );
    ctx.fillText("Lives: " + lives , 360, 390 );
    if(gameOverBool){            
        ctx.font="bold 40px Arial";
        ctx.fillText("GAME OVER" , 200, 200 );
        ctx.font="bold 15px Arial";
        ctx.fillText("PRESS V TO START AGAIN" , 200, 230 );
    }
    if(youWonBool){
        ctx.font="bold 40px Arial";
        ctx.fillText("YOU WON!" , 200, 200 );
        ctx.font="bold 15px Arial";
        ctx.fillText("PRESS V TO START AGAIN" , 200, 230 );
    }

    if (!begin) {
        ctx.font="bold 30px Arial";
        ctx.fillText("Press P to begin" , 200, 200 );
        ctx.font="bold 15px Arial";
        ctx.fillText("you can also use P to pause" , 200, 230 );
    };

}
