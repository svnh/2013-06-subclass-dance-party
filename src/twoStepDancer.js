var TwoStepDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

TwoStepDancer.prototype = Object.create(Dancer.prototype);
TwoStepDancer.prototype.constructor = TwoStepDancer;

var oldStep = TwoStepDancer.prototype.step;

TwoStepDancer.prototype.step = function(){
  oldStep.call(this, this._timeBetweenSteps);

  var twoStepper = this.$node;

  var moveDistance = Math.random()*75 + 'px';

  if(this._keepDancing) {
    twoStepper.animate({
      opacity:'1'
    },"fast");
    twoStepper.animate({
      left: '+=' + moveDistance,
      opacity:'.25'
    },"fast");
      twoStepper.animate({
      opacity:'1'
    },"fast");
    twoStepper.animate({
      left: '-=' + moveDistance,
      opacity:'.25'
    },"fast");
  } else {
    twoStepper.stop(true, true);
  }
};