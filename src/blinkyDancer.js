var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

var oldStep = BlinkyDancer.prototype.step;

BlinkyDancer.prototype.step = function(){
  oldStep.call(this, this._timeBetweenSteps);

  var thisDancer = this.$node;

  if(this._keepDancing) {
    thisDancer.toggle();
  } else {
    var styleSettings = {
      'display': 'block'
    };
    thisDancer.css(styleSettings);
    console.log("lined up");
  }
};