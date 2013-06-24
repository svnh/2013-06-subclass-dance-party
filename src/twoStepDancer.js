var TwoStepDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

TwoStepDancer.prototype = new Dancer();
TwoStepDancer.prototype.constructor = TwoStepDancer;

var oldStep = TwoStepDancer.prototype.step;

TwoStepDancer.prototype.step = function(){
    oldStep.call(this, this._timeBetweenSteps);

    this.$node.animate({
      left: '+=50',
      opacity: "toggle"
    },"slow");
};