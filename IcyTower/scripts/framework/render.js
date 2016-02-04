// GENERIC RENDERING

var g_doClear = true;
var g_doBox = false;
var g_undoBox = false;
var g_doFlipFlop = false;
var g_doRender = true;
var g_debug = false;
var g_mute = false;
var g_frameCounter = 1;


var TOGGLE_CLEAR = 'C'.charCodeAt(0);
var TOGGLE_BOX = 'B'.charCodeAt(0);
var TOGGLE_UNDO_BOX = 'U'.charCodeAt(0);
var TOGGLE_FLIPFLOP = 'F'.charCodeAt(0);
var TOGGLE_RENDER = 'R'.charCodeAt(0);
var mute = 'M'.charCodeAt(0);
var DEBUG = 'G'.charCodeAt(0);

function render(ctx) {
    
    if (eatKey(TOGGLE_CLEAR)) g_doClear = !g_doClear;
    if (eatKey(TOGGLE_BOX)) g_doBox = !g_doBox;
    if (eatKey(TOGGLE_UNDO_BOX)) g_undoBox = !g_undoBox;
    if (eatKey(TOGGLE_FLIPFLOP)) g_doFlipFlop = !g_doFlipFlop;
    if (eatKey(TOGGLE_RENDER)) g_doRender = !g_doRender;
    if (eatKey(mute)) {
        g_mute = !g_mute;

        muteButton();
    }
    if (eatKey(DEBUG)) {
        g_debug = !g_debug;
    };
    
    if (g_doClear) util.clearCanvas(ctx);
    
    if (g_doBox) util.fillBox(ctx, 200, 200, 50, 50, "red");
    
    if (g_doRender) renderSimulation(ctx);
    
    if (g_doFlipFlop) {
        var boxX = 250,
            boxY = g_isUpdateOdd ? 100 : 200;

        util.fillBox(ctx, boxX, boxY, 50, 50, "green");
        
        ctx.fillText(g_frameCounter % 1000, boxX + 10, boxY + 20);
        // ..and its odd/even status too
        var text = g_frameCounter % 2 ? "odd" : "even";
        ctx.fillText(text, boxX + 10, boxY + 40);
    }
    
    if (g_undoBox) ctx.clearRect(200, 200, 50, 50);
    
    ++g_frameCounter;
}
