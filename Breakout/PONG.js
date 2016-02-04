

//The "MAINLOOP" code, inside g_main, is much simplified as a result.



"use strict";

/* jshint browser: true, devel: true, globalstrict: true */

var g_canvas = document.getElementById("myCanvas");
var g_ctx = g_canvas.getContext("2d");

var KEY_W = 'W'.charCodeAt(0);
var KEY_S = 'S'.charCodeAt(0);
var KEY_A = 'A'.charCodeAt(0);
var KEY_D = 'D'.charCodeAt(0);


var g_paddle1 = new Paddle({
    cx : 200,
    cy : 350,
    
    GO_UP   : KEY_W,
    GO_DOWN : KEY_S,
    GO_LEFT : KEY_A,
    GO_RIGHT : KEY_D,
});



function gatherInputs() {
}

function updateSimulation(du) {
    if(!gameOverBool && !youWonBool){
        g_ball.update(du);
        g_paddle1.update(du);
    }
}


// =================
// RENDER SIMULATION
// =================


function renderSimulation(ctx) {
    drawEveryBrick(ctx);
    g_ball.render(ctx);
    g_paddle1.render(ctx);
    scoreBoard(ctx);


}
g_main.init();