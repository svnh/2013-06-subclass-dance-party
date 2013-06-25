var TwoStepDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

TwoStepDancer.prototype = Object.create(Dancer.prototype);
TwoStepDancer.prototype.constructor = TwoStepDancer;

var oldStep = TwoStepDancer.prototype.step;

TwoStepDancer.prototype.step = function(){
  oldStep.call(this, this._timeBetweenSteps);

  var moveDistance = Math.random()*75 + 'px';

  this.$node.animate({
    opacity:'1'
  },"fast");
  this.$node.animate({
    left: '+=' + moveDistance,
    opacity:'.25'
  },"fast");
    this.$node.animate({
    opacity:'1'
  },"fast");
  this.$node.animate({
    left: '-=' + moveDistance,
    opacity:'.25'
  },"fast");
};