var FadedDancer = function(top, left){
  this.$node = $('<span class="image-dancer"><img src="swirl.gif" /></span>');
  this._timeBetweenSteps = 150;
  this.step();
  this.setPosition(top, left);
};

FadedDancer.prototype = new Dancer();
FadedDancer.prototype.constructor = FadedDancer;

var oldStep = FadedDancer.prototype.step;

FadedDancer.prototype.step = function(){
    oldStep.call(this, this._timeBetweenSteps);

  this.$node.animate({
    width: '50%',
    height: '50%',
    opacity:'-=0.75'
  });
  this.$node.animate({
    width: '100%',
    height: '100%',
    opacity:'+=0.75'
  });
};