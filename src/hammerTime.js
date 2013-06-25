var HammerTime = function(top, left, timeBetweenSteps){
  var vLoc = $("body").height()-90;
  var hLoc = $("body").width()+82;
  Dancer.call(this, vLoc, hLoc, 200);
  this.$node = $('<img src="McHammer.gif" class="McHammer" />');
  this.setPosition(vLoc, hLoc);
  this._top = vLoc;
  this.step();
};

HammerTime.prototype = Object.create(Dancer.prototype);
HammerTime.prototype.constructor = HammerTime;

var oldStep = HammerTime.prototype.step;

HammerTime.prototype.step = function(){

  oldStep.call(this, 200);

  var thisDancer = this.$node;

  if(this._keepDancing === false) {
    var styleSettings = {
      left: '40px'
    };
    this.$node.css(styleSettings);
  } else {
    thisDancer.animate({
      left: '-=' + 100
    });
  }
};