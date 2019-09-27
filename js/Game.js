Game = function(canvasId) {
	var canvas = document.getElementById(canvasId);
this.engine = new BABYLON.Engine(canvas, true);
// Contains all loaded assets needed for this state
this.assets = [];
// The state scene
this.scene = null;
// Resize window event
var _this = this;
window.addEventListener("resize", function() {
_this.engine.resize();
});
// Run the game
this.run();}
