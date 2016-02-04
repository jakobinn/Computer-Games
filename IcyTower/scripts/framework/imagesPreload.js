

"use strict";

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


function muteButton(){
   if (g_mute) {
        intro.pause();
        mainSong.pause();
    }
    if(!g_mute  && worldManager._game_status === 1){
        intro.play();
    }
    if(!g_mute  && worldManager._game_status === 2){
        mainSong.play();
    } 
}



var intro = new Audio("scripts/sounds/intro.mp3");
var mainSong = new Audio("scripts/sounds/mainSong.mp3");

function startIntro(){
        if (!g_mute) {
	        intro.addEventListener('ended', function(){
	        this.currentTime = 0;
	        this.play();
	   		 }, false);
	     	intro.play(); 
     }; 
}

function stopIntro(){
    intro.pause();
}

function startMain(){
	if (!g_mute) {
	    mainSong.addEventListener('ended', function(){
	        this.currentTime = 0;
	        this.play();
	    }, false);
	     mainSong.play();  
    };
}

function stopMain(){
    mainSong.pause();
}

startIntro();

Image.prototype.asyncLoad = function(src, asyncCallback) {
    
    this.onload = asyncCallback;
    this.onerror = asyncCallback;

    this.src = src;
};

function imagesPreload(requiredImages,
                       loadedImages,
                       completionCallback) {

    var numImagesRequired,
        numImagesHandled = 0,
        currentName,
        currentImage,
        preloadHandler;

    numImagesRequired = Object.keys(requiredImages).length;

    // A handler which will be called when our required images are finally
    // loaded (or when the fail to load).

    preloadHandler = function () {

        console.log("preloadHandler called with this=", this);
        loadedImages[this.name] = this;

        if (0 === this.width) {
            console.log("loading failed for", this.name);
        }
        this.onload = null;
        this.onerror = null;

        numImagesHandled += 1;

        if (numImagesHandled === numImagesRequired) {
            console.log("all preload images handled");
            console.log("loadedImages=", loadedImages);
            console.log("");
            console.log("performing completion callback");

            completionCallback();

            console.log("completion callback done");
            console.log("");
        }
    };


    for (currentName in requiredImages) {
        
        if (requiredImages.hasOwnProperty(currentName)) {
            
            console.log("preloading image", currentName);
            currentImage = new Image();
            currentImage.name = currentName;

            currentImage.asyncLoad(requiredImages[currentName], preloadHandler);
        }
    }
}
