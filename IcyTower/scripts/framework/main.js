// ========
// MAINLOOP
// ========

"use strict";

var main = {
    
    _frameTime_ms : null,
    _frameTimeDelta_ms : null

};

main.iter = function (frameTime) {
    
    this._updateClocks(frameTime);
    this._iterCore(this._frameTimeDelta_ms);
    this._debugRender(g_ctx);
    
    if (!this._isGameOver) this._requestNextIteration();
};

main._updateClocks = function (frameTime) {
    
    if (this._frameTime_ms === null) this._frameTime_ms = frameTime;
    
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

window.requestAnimationFrame = 
    window.requestAnimationFrame ||       
    window.mozRequestAnimationFrame ||   
    window.webkitRequestAnimationFrame;    

function mainIterFrame(frameTime) {
    main.iter(frameTime);
}

main._requestNextIteration = function () {
    window.requestAnimationFrame(mainIterFrame);
};

// Mainloop-level debug-rendering

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
    g_ctx.fillStyle = "white";

    this._requestNextIteration();
};
