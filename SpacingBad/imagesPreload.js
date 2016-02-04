// Multi-Image Preloader

"use strict";

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var leftScore = 0;
var rightScore = 0;


var soundtrack = new Audio("soundtrack.mp3");
soundtrack.addEventListener('ended', function(){
    this.currentTime = 0;
    this.play();
}, false);
soundtrack.play();

Image.prototype.asyncLoad = function(src, asyncCallback) {


    this.onload = asyncCallback;
    this.onerror = asyncCallback;
    
    console.log("requesting image src of ", src);
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

        // Skip inherited properties from the prototype chain    
        if (requiredImages.hasOwnProperty(currentName)) {
            
            console.log("preloading image", currentName);
            currentImage = new Image();
            currentImage.name = currentName;

            currentImage.asyncLoad(requiredImages[currentName], preloadHandler);
        }
    }
}
