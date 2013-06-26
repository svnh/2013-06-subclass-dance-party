var HammerTime = function(top, left, timeBetweenSteps){
  var vLoc = $("body").height()-90;
  var hLoc = $("body").width()+82;

  this._goingLeft = true;

  Dancer.call(this, vLoc, hLoc, 200);
  this.$node = $('<img src="McHammer.gif" class="McHammer" />');

  this.setPosition(vLoc, hLoc);
  this.step();
};

HammerTime.prototype = Object.create(Dancer.prototype);
HammerTime.prototype.constructor = HammerTime;

var oldStep = HammerTime.prototype.step;

HammerTime.prototype.step = function(){
  oldStep.call(this, 200);

  var max = $("body").width()-60;

  var thisDancer = this.$node;

  if(thisDancer.position().left < 10) {
    this._goingLeft = false;
    this.$node.stop(true, true);
  }
  if( (!this._goingLeft)&&(thisDancer.position().left > max) ) {
    this._goingLeft = true;
    this.$node.stop(true, true);
  }

  if(this._goingLeft) {
    thisDancer.animate({
      left: '-=' + 100
    });
  } else {
    thisDancer.animate({
      left: '+=' + 100
    });
  }
};