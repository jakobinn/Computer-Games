function Bricks(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
}



function make(ctx ,x, y, w, h){
	ctx.fillRect(x, y , w, h);

}


Bricks.prototype.rend = function (ctx) {

    ctx.fillStyle = this.color;
    ctx.fillRect(this.cx,
                 this.cy,
                 (width)-1,
                 (height)-1);
    
};


var lives = 3;
var rows =8;
var cols = 8;
var width = (400/rows);
var height = 400/((cols*2+4));
var aBrick = new Array(rows);

function makeBricks(){

	for (var i = 0; i < rows; i++) {
		aBrick[i] = new Array(cols);
		for (var j = 0; j < cols; j++) {
                aBrick[i][j] = new Bricks({
                cx : i*width,
                cy : j*height,
                brickAlive : true, 
            }); 
            colorBricks(i, j);
		};
	};
}

makeBricks();


function drawEveryBrick(ctx){
    for (var i = 1; i < rows-1; i++) {
        for (var j = 1; j < cols; j++) {
            if (aBrick[i][j].brickAlive) {
                aBrick[i][j].rend(ctx);
            };
        }
    }
}

Bricks.collidesWithBrick = function(prevX, prevY, nextX, nextY){
if(nextX > 0 && nextY > 0){
    if(nextX < (cols-1)){
        if(nextY < (rows)){
            if(aBrick[nextX][nextY].brickAlive){
                score += 1;
                aBrick[nextX][nextY].brickAlive = false;
                return true;
            }
        }
    }
}
    return false;
}


function colorBricks (i, j){
    if(i === 1){
        aBrick[i][j].color = "#FC5D5D";
    }
    if(i === 2){
        aBrick[i][j].color = "#F8CA57";
    }
    if(i === 3){
        aBrick[i][j].color = "#ECF83D";
    }
    if(i === 4){
        aBrick[i][j].color = "#F2F990";
    }if (i=== 5) {
        aBrick[i][j].color = "#A7F096";
    }if (i === 6) {
        aBrick[i][j].color = "#98CDF3";
    };
}