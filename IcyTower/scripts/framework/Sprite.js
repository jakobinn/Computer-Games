// ============
// SPRITE STUFF
// ============

"use strict";

function Sprite(image) {
    this.image = image;

    this.width = image.width;
    this.height = image.height;
    this.scale = 1;
}

Sprite.prototype.drawAt = function (ctx, x, y) {
    ctx.drawImage(this.image,
                  x, y);
};

Sprite.prototype.drawCentredAt = function (ctx, cx, cy, rotation) {
    if (rotation === undefined) rotation = 0;
    
    var w = this.width,
        h = this.height;

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rotation);
    ctx.scale(this.scale, this.scale);

    ctx.drawImage(this.image, -w / 2, -h / 2);

    ctx.restore();
};

Sprite.prototype.drawCentredAt2 = function (ctx, sx, sy, swidth, sheight, cx, cy, width, height) {
    ctx.save();
    ctx.scale(this.scale, this.scale);

    ctx.drawImage(this.image, sx, sy, swidth, sheight, cx - (width / 2), cy - (height / 2), width, height);

    ctx.restore();
};
