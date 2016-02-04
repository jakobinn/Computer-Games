// ======
// ENTITY
// ======


"use strict";

function Entity(isRectangle) {
    this._isRectangle = isRectangle;

};

Entity.prototype.setup = function (descr) {

    for (var property in descr) {
        this[property] = descr[property];
    }
    
    // Get my (unique) spatial ID
    this._spatialID = spatialManager.getNewSpatialID();
    
    // I am not dead yet!
    this._isDeadNow = false;
};

Entity.prototype.setPos = function (cx, cy) {
    this.cx = cx;
    this.cy = cy;
};

Entity.prototype.getPos = function () {
    return {posX : this.cx, posY : this.cy};
};

Entity.prototype.getRadius = function () {
    return 0;
};

Entity.prototype.getWidth = function () {
    return 0;
};

Entity.prototype.getHeight = function () {
    return 0;
};

Entity.prototype.getCollisionPos = function () {
    return this.getPos();
};

Entity.prototype.getCollisionHeight = function () {
    return this.getHeight();
};

Entity.prototype.getCollisionWidth = function () {
    return this.getWidth();
};

Entity.prototype.isCollidable = function() {
    return true;
};

Entity.prototype.getSpatialID = function () {
    return this._spatialID;
};

Entity.prototype.kill = function () {
    this._isDeadNow = true;
};

Entity.prototype.isDeadNow = function() {
    return this._isDeadNow;
};

Entity.prototype.isRectangle = function() {
    return this._isRectangle;
}

Entity.prototype.findHitEntity = function (nextX, nextY) {
    var pos = this.getCollisionPos();

    if (this.isRectangle()) {
        return spatialManager.findEntityInRangeRect (
            pos.posX, pos.posY, nextX, nextY, this.getCollisionWidth(), this.getCollisionHeight()
        );
    } else {
        return spatialManager.findEntityInRangeCircle(
            pos.posX, pos.posY, this.getRadius()
        );
    }
};

// This is just little "convenience wrapper"
Entity.prototype.isColliding = function (nextX, nextY) {
    return this.findHitEntity(nextX, nextY);
};

Entity.prototype.wrapPosition = function () {
    this.cx = util.wrapRange(this.cx, 0, g_canvas.width);
    this.cy = util.wrapRange(this.cy, 0, g_canvas.height);
};
