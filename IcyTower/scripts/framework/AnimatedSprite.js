// ============
// ANIMATED SPRITE
// ============

'use strict';

function AnimatedSprite(image, width, height, displayWidth, displayHeight, speed, frames) {
    this.image = image;
    this.width = width;
    this.height = height;
    this.displayWidth = displayWidth;
    this.displayHeight = displayHeight;
    this.frames = frames;
    this.speed = speed;

    this._frameIndex = 0;
}

AnimatedSprite.prototype.update = function(du) {
    this._frameIndex += this.speed * du;
};

AnimatedSprite.prototype.render = function (ctx, cx, cy, rotation) {
    if (rotation === undefined) rotation = 0;

    ctx.save();
    var frame = Math.floor(this._frameIndex) % this.frames.length;
    ctx.translate(-this.displayWidth / 2, -this.displayHeight / 2);
    ctx.drawImage(this.image,
        this.frames[frame] * this.width, 0,
        this.width, this.height,
        cx, cy,
        this.displayWidth, this.displayHeight);
    ctx.restore();
};