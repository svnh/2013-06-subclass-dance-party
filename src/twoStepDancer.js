var TwoStepDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

TwoStepDancer.prototype = Object.create(Dancer.prototype);
TwoStepDancer.prototype.constructor = TwoStepDancer;

var oldStep = TwoStepDancer.prototype.step;

TwoStepDancer.prototype.step = function(){
  oldStep.call(this, this._timeBetweenSteps);

  var thisDancer = this.$node;
  var moveDistance = Math.random()*75 + 'px';

  if(this._keepDancing) {
    thisDancer.animate({
      opacity:'1'
    },"fast");
    thisDancer.animate({
      left: '+=' + moveDistance,
      opacity:'.25'
    },"fast");
      thisDancer.animate({
      opacity:'1'
    },"fast");
    thisDancer.animate({
      left: '-=' + moveDistance,
      opacity:'.25'
    },"fast");
  } else {
    thisDancer.stop(true, true);
  }
};