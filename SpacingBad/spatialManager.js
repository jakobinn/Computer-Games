

"use strict";


var spatialManager = {

// "PRIVATE" DATA

_nextSpatialID : 1, 
_entities : [],


getNewSpatialID : function() {

    return this._nextSpatialID++;
},

register: function(entity) {
    var pos = entity.getPos();
    var spatialID = entity.getSpatialID();

    this._entities[spatialID] = entity;

},

unregister: function(entity) {
    var spatialID = entity.getSpatialID();
    delete this._entities[spatialID];

},

findEntityInRange: function(posX, posY, radius) {
    for (var i in this._entities) {
        var ent = this._entities[i];
        var distance = util.wrappedDistSq(posX, posY, ent.getPos().posX, ent.getPos().posY, g_canvas.width, g_canvas.height);
        var squareSum = (radius + ent.getRadius());
        squareSum *= squareSum;

        if(distance < squareSum){
            return ent;
        }
    };

    return false;

},

render: function(ctx) {
    var oldStyle = ctx.strokeStyle;
    ctx.strokeStyle = "red";
    
    for (var ID in this._entities) {
        var e = this._entities[ID];
        var posE = e.getPos();
        util.strokeCircle(ctx, posE.posX, posE.posY, e.getRadius());
    }
    ctx.strokeStyle = oldStyle;
}

}
