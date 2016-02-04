function Paddle(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
}

var muteBool = false;
var audio = new Audio('hitBrick.mp3');

Paddle.prototype.halfWidth = 50;
Paddle.prototype.halfHeight = 10;

Paddle.prototype.update = function (du) {
   if(!mouseOn){
     if(g_keys[this.GO_LEFT] && this.cx > Paddle.prototype.halfWidth){
          this.cx -= 5
      }else if(g_keys[this.GO_RIGHT] && this.cx < g_canvas.width - Paddle.prototype.halfWidth){
          this.cx += 5;
      }
    }
};

Paddle.prototype.render = function (ctx) {
    // (cx, cy) is the centre; must offset it for drawing
    ctx.fillStyle = "black";
    ctx.fillRect(this.cx - this.halfWidth,
                 this.cy - this.halfHeight,
                 this.halfWidth * 2,
                 this.halfHeight * 2);
};


Paddle.prototype.collidesWith = function (prevX, prevY, 
                                          nextX, nextY, 
                                          r) {
    var paddleEdge = this.cy;
    // Check X coords
    if ((nextY - r < paddleEdge && prevY - r >= paddleEdge) ||
        (nextY + r > paddleEdge && prevY + r <= paddleEdge)) {
        // Check Y constructor rds
        if (nextX + r >= this.cx - this.halfWidth &&
            nextX - r <= this.cx + this.halfWidth) {
            // It's a hit!
          if(!muteBool){
            audio.play();
          }
            return true;
        }
    }
    // It's a miss!
    return false;
};