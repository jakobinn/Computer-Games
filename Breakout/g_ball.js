// ==========
// BALL STUFF
// ==========

"use strict";

/* jshint browser: true, devel: true, globalstrict: true */

var g_canvas = document.getElementById("myCanvas");
var g_ctx = g_canvas.getContext("2d");

var g_ball = {
    cx: 50,
    cy: 200,
    radius: 7,

    xVel: 5,
    yVel: 4
};

var gameOverBool = false;
var youWonBool = false;

g_ball.update = function (du) {
    // Remember my previous position
    var prevX = this.cx;
    var prevY = this.cy;
    
    // Compute my provisional new position (barring collisions)
    var nextX = prevX + this.xVel * du;
    var nextY = prevY + this.yVel * du;

    // Bounce off the paddles
    if (g_paddle1.collidesWith(prevX, prevY, nextX, nextY, this.radius))
    {
        this.yVel *= -1;
    }


    var prevXnew = Math.floor((prevX)/width);
    var prevYnew = Math.floor((prevY)/height);
    var nextXnew = Math.floor((nextX)/width);
    var nextYnew = Math.floor((nextY)/height);

    if(prevYnew !== nextYnew && Bricks.collidesWithBrick(prevXnew, prevYnew, nextXnew, nextYnew)){
        this.yVel *= -1;
    }else if(prevXnew !== nextXnew && Bricks.collidesWithBrick(prevXnew, prevYnew, nextXnew, nextYnew)){
        this.xVel *= -1;
    }


    //Bounce off left edge
    if (nextX < 0 ){
        this.xVel *= -1;
    }
    //Bounce off right edge    
    if(nextX > g_canvas.width){
        this.xVel *= -1;
    }

    youWon();

    // Bounce off top and bottom edges
    if (nextY > g_canvas.height) {               // bottom edge
        g_ball.reset();
        lives--;
        gameOver();
    }

    if(nextY < 0){      
        this.yVel *= -1;
    }

    var margin = 4 * this.radius;
    if (nextX < -margin || 
        nextX > g_canvas.width + margin) {
        this.reset();
    }

    this.cx += this.xVel * du;
    this.cy += this.yVel * du;
};


g_ball.reset = function () {
    this.cx = 40;
    this.cy = 190;
    this.xVel = 5;
    this.yVel = 4;
};

g_ball.render = function (ctx) {
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    fillCircle(ctx, this.cx, this.cy, this.radius);
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';
    ctx.stroke();
      
};

