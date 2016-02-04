// ========
// MAINLOOP
// ========


"use strict";



var main = {
    
    _frameTime_ms : null,
    _frameTimeDelta_ms : null,

};

// Perform one iteration of the mainloop
main.iter = function (frameTime) {
    
  
    this._updateClocks(frameTime);  
    this._iterCore(this._frameTimeDelta_ms);
    this._debugRender(g_ctx);
    
    if (!this._isGameOver) this._requestNextIteration();
};

main._updateClocks = function (frameTime) {
    
    // First-time initialisation
    if (this._frameTime_ms === null) this._frameTime_ms = frameTime;
    
    // Track frameTime and its delta
    this._frameTimeDelta_ms = frameTime - this._frameTime_ms;
    this._frameTime_ms = frameTime;
};

main._iterCore = function (dt) {
    
    // Handle QUIT
    if (requestedQuit()) {
        this.gameOver();
        return;
    }
    
    gatherInputs();
    update(dt);
    render(g_ctx);
};

main._isGameOver = false;

main.gameOver = function () {
    this._isGameOver = true;
    console.log("gameOver: quitting...");
};

var KEY_QUIT = 'Q'.charCodeAt(0);
function requestedQuit() {
    return keys[KEY_QUIT];
}

// Annoying shim for Firefox and Safari
window.requestAnimationFrame = 
    window.requestAnimationFrame ||        // Chrome
    window.mozRequestAnimationFrame ||     // Firefox
    window.webkitRequestAnimationFrame;    // Safari

function mainIterFrame(frameTime) {
    main.iter(frameTime);
}

main._requestNextIteration = function () {
    window.requestAnimationFrame(mainIterFrame);
};


var TOGGLE_TIMER_SHOW = 'T'.charCodeAt(0);

main._doTimerShow = false;

main._debugRender = function (ctx) {
    
    if (eatKey(TOGGLE_TIMER_SHOW)) this._doTimerShow = !this._doTimerShow;
    
    if (!this._doTimerShow) return;
    
    var y = 350;
    ctx.fillText('FT ' + this._frameTime_ms, 50, y+10);
    ctx.fillText('FD ' + this._frameTimeDelta_ms, 50, y+20);
    ctx.fillText('UU ' + g_prevUpdateDu, 50, y+30); 
    ctx.fillText('FrameSync ON', 50, y+40);
};



main.init = function () {

    this._requestNextIteration();
};
