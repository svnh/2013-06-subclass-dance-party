var FadedDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

FadedDancer.prototype = new Dancer();
FadedDancer.prototype.constructor = FadedDancer;

var oldStep = FadedDancer.prototype.step;

FadedDancer.prototype.step = function(){
    oldStep.call(this, this._timeBetweenSteps);

  this.$node.animate({
    opacity:'-=0.25'
  },"fast");
};