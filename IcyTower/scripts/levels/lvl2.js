function lvl2(){


var tempRand = Math.random();

if (tempRand < 0.25) {g_levels.push([
[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
[0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,2,2,0,0,0,0,0,0,2,2,2,2],
[0,0,2,2,2],
[0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,2,2],
[0,0,0,0,0,0,2,2,2,2,2],
[2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,2,2],
[0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,2,2,2,2],
[0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,2,2,2,2],
[0,0,2,2,2,2,2],
[0,0,0,2,2,2,2,2],
[0,2,2,2,2,2],
[2,2,2],
[0,0,0,0,0,0,0,0,2,2,2],
[0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2],
[0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2],
[0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,2,2,2,2,2],
[2,2,2,2],
[0,0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2,2],
[0,2,2,2,2],
[0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2],
[2,2,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,2,2,2],
[0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,2,2,2,2,2],
[2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,0,2,2],
[2,2,2,2,2],
[0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2],
[0,0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,2,2,2,2,2],
[2,2,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,2,2,2,2],
[0,0,0,2,2,2,2,2],
[0,0,0,0,0,2,2],
[0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2],
[2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,2,2,2,2,2],
[0,0,0,0,2,2,0,0,0,0,0,2,2,2,2],
[0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,2,2,2,2,2],
[0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,2,2,2,2],
[0,0,2,2],
[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2],
[0,0,0,0,0,2,2,2,2],
[0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,2,2,2,2],
[0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2,2],
[2,2,2,2,2],
[0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,2,2,2,2,2]
]);}
if(tempRand >= 0.25 && tempRand < 0.50){
	g_levels.push([
[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
[0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,2,2,2],
[2,2,2,2],
[0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,2,2,2,2],
[2,2,2,2],
[0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2],
[0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,2,2],
[0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2],
[2,2,2,2,2],
[0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,2,2,2],
[2,2,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,2,2,2,2],
[0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,2,2,2,2],
[0,0,2,2,2,2,2],
[0,0,0,0,2,2,2,2,2],
[0,0,0,2,2,2,2],
[0,0,0,0,0,2,2,2,2,2],
[2,2,2,2,2],
[0,0,0,0,0,2,2],
[2,2,2,2,2],
[0,2,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2],
[0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2],
[0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,2,2,2,2],
[0,0,0,0,2,2,2,2,2],
[0,0,0,0,2,2,2,2,2],
[0,2,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,2,2,2,2],
[0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,2,2],
[0,0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[2,2,2],
[0,2,2,2],
[0,0,0,2,2,2,2,2],
[0,2,2,2],
[0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,2,2,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,2,2,2,2],
[0,0,0,2,2,2,2,2],
[2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,0,0,2,2],
[0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,2,2,2,2,2],
[0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,2,2,2,2],
[0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,2,2,2,2,2],
[0,2,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2,2],
[0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,2,2],
[0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,2,2,2,2,2]
]);
}
if (tempRand >= 0.50 && tempRand < 0.75) {
	g_levels.push([
[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
[0,0,0,2,2,2,2,2],
[0,2,2],
[0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,2,2,2,2,2],
[0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,2,2,2,2,2],
[2,2,2],
[0,0,2,2,2,2,2],
[2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2],
[0,0,0,0,0,2,2],
[0,0,0,2,2,2],
[0,2,2,2,2,2],
[0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2],
[0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,2,2,2,2],
[0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,2,2,2,2],
[2,2,2,2],
[0,0,0,2,2],
[0,0,2,2,2,2],
[0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,2,2],
[0,2,2,2,2],
[0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,2,2],
[0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,2,2,2,2],
[0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,2,2],
[0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2],
[0,0,0,0,0,0,0,0,2,2],
[0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,2],
[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,2,2,2,2,2],
[0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,2,2,2,2],
[0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2],
[0,0,0,0,2,2,2,2,2],
[0,0,2,2],
[0,2,2,2,2,2],
[0,0,0,0,2,2,2,2,2],
[0,0,0,2,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2,2],
[2,2,2,2,2],
[2,2,2,2],
[0,0,0,0,2,2,2,2],
[0,0,0,0,0,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,2,2,2,2,2],
[0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,2,2,2,2],
[0,0,0,0,0,0,2,2,2,2,2],
[0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,2,2,2],
[0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,2,2,2,2,2],
[0,2,2],
[2,2],
[0,0,0,0,2,2,2,2,2],
[0,0,2,2,2,2],
[0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,2,2,2,2,2],
[0,0,0,0,0,0,2,2,2,2],
[0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,2,2,2,2],
]);
};
if (tempRand >= 0.75 && tempRand < 1) {
g_levels.push([
[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
[0,0,2,2,2,2,2],
[0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,2,2,2,2],
[0,2,2,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,2,2,2],
[2,2,2,2],
[0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,0,0,2,2],
[2,2,2,2],
[0,2,2],
[0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2,2,2],
[2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[2,2,2,2],
[0,0,0,0,0,0,0,2,2,2,2],
[2,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2,2],
[2,2,2,2],
[0,0,0,0,0,0,2,2,2,2,2],
[0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,2,2,2,2],
[2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2],
[2,2,2,2,2],
[0,0,0,0,0,2,2,2,2],
[0,0,2,2,2],
[0,0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,2,2,2],
[0,0,0,2,2,2,2,2],
[2,2,2,2],
[0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2],
[2,2,2,2],
[2,2,2,2],
[0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,2,2],
[0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2],
[2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,2,2,2,2],
[2,2,2,2],
[2,2,2,2,2],
[0,0,0,0,0,2,2,2,2],
[0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,2,2,2,2,2],
[2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,2,2,2,2,2],
[0,0,2,2,2,2,2],
[0,0,0,0,0,2,2,2],
[0,0,2,2,2,2,2],
[0,0,2,2,2],
[0,0,0,0,0,2,2,2,2],
[0,0,0,0,2,2,2,2,2],
[2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2],
[0,0,0,0,0,2,2,2,2,2],
[2,2,2,2],
[0,0,0,2,2,2,2,2],
[0,0,0,0,0,2,2,2,2],
[0,0,0,2,2,2,2,2],
[0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2,2],
[2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,2,2,2,2],
[0,0,2,2,2,2],
[2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,2,2,2],
[0,0,0,0,0,2,2,2]
]);


};
}