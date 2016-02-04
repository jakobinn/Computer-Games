// GENERIC UPDATE LOGIC

// The "nominal interval" is the one that all of our time-based units are
// calibrated to e.g. a velocity unit is "pixels per nominal interval"
//
var NOMINAL_UPDATE_INTERVAL = 16.666;

var g_prevUpdateDt = null;


var g_prevUpdateDu = null;

var g_isUpdateOdd = false;


function update(dt) {
    

    if (shouldSkipUpdate()) return;
    var original_dt = dt;
    
    if (dt > 200) {
        console.log("Big dt =", dt, ": CLAMPING TO NOMINAL");
        dt = NOMINAL_UPDATE_INTERVAL;
    }
    
    var du = (dt / NOMINAL_UPDATE_INTERVAL);
    
    updateSimulation(du);
    
    g_prevUpdateDt = original_dt;
    g_prevUpdateDu = du;
    
    g_isUpdateOdd = !g_isUpdateOdd;
}

// Togglable Pause Mode
//
var KEY_PAUSE = 'P'.charCodeAt(0);
var KEY_STEP  = 'O'.charCodeAt(0);

var g_isUpdatePaused = true;

function shouldSkipUpdate() {
    if (eatKey(KEY_PAUSE)) {
        g_isUpdatePaused = !g_isUpdatePaused;
        begin = true;
    }
    return g_isUpdatePaused && !eatKey(KEY_STEP);    
}