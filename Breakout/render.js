// GENERIC RENDERING

var g_doClear = true;
var g_doBox = false;
var g_undoBox = false;
var g_doFlipFlop = false;
var g_doRender = true;

var g_frameCounter = 1;

var TOGGLE_CLEAR = 'C'.charCodeAt(0);
var TOGGLE_BOX = 'B'.charCodeAt(0);
var TOGGLE_UNDO_BOX = 'U'.charCodeAt(0);
var TOGGLE_FLIPFLOP = 'F'.charCodeAt(0);
var TOGGLE_RENDER = 'R'.charCodeAt(0);
var START_AGAIN = 'V'.charCodeAt(0);
var MUTE = 'M'.charCodeAt(0);
var MOUSEKEY = 'G'.charCodeAt(0);

var mouseOn = false;
function initMouseHandlers() {
    window.addEventListener("mousemove", handleMouseMove);
}
var g_mouseX;
var g_mouseY;

function handleMouseMove(evt) {
 
    g_mouseX = evt.clientX - g_canvas.offsetLeft;
    g_mouseY = evt.clientY - g_canvas.offsetTop;
    
    if(mouseOn && !g_isUpdatePaused){
        g_paddle1.cx = g_mouseX;
    }
    
}

initMouseHandlers();

function render(ctx) {
    
    // Process various option toggles
    //
    if (eatKey(TOGGLE_CLEAR)) g_doClear = !g_doClear;
    if (eatKey(TOGGLE_BOX)) g_doBox = !g_doBox;
    if (eatKey(TOGGLE_UNDO_BOX)) g_undoBox = !g_undoBox;
    if (eatKey(TOGGLE_FLIPFLOP)) g_doFlipFlop = !g_doFlipFlop;
    if (eatKey(TOGGLE_RENDER)) g_doRender = !g_doRender;
    if (eatKey(MOUSEKEY)) mouseOn = !mouseOn;
    if (eatKey(START_AGAIN) && (lives === 0 || score > 41)) { 
            lives = 3;
            score = 0;
            Paddle.prototype.halfWidth = 50;
            g_paddle1.cx = 230;
            g_ball.reset();
            makeBricks();
            gameOverBool = false;
            youWonBool = false;
        }
    if(eatKey(MUTE)) {muteBool = !muteBool; }
    

    if (g_doClear) clearCanvas(ctx);
    
    if (g_doBox) fillBox(ctx, 200, 200, 50, 50, "red");
    

    if (g_doRender) renderSimulation(ctx);
    
    
    if (g_doFlipFlop) {
        var boxX = 250,
            boxY = g_isUpdateOdd ? 100 : 200;
        
        // Draw flip-flop box
        fillBox(ctx, boxX, boxY, 50, 50, "green");
        
        // Display the current frame-counter in the box...
        ctx.fillText(g_frameCounter % 1000, boxX + 10, boxY + 20);
        var text = g_frameCounter % 2 ? "odd" : "even";
        ctx.fillText(text, boxX + 10, boxY + 40);
    }
    
    if (g_undoBox) ctx.clearRect(200, 200, 50, 50);
    
    ++g_frameCounter;
}