// ==============
// MOUSE HANDLING
// ==============

"use strict";

var g_mouseX = 0,
    g_mouseY = 0;

function handleMouse(evt) {
    
    g_mouseX = evt.clientX - g_canvas.offsetLeft;
    g_mouseY = evt.clientY - g_canvas.offsetTop;

    var button = evt.buttons === undefined ? evt.which : evt.buttons;
    if (!button) return;

    worldManager.mousePressed();
}

window.addEventListener("mousedown", handleMouse);
window.addEventListener("mousemove", handleMouse);
