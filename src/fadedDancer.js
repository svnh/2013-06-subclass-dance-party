var FadedDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="swirl.gif" class="swirly" />');
  this.$node[0].obj = this;
  this.setPosition(top, left);
};

FadedDancer.prototype = Object.create(Dancer.prototype);
FadedDancer.prototype.constructor = FadedDancer;

var oldStep = FadedDancer.prototype.step;

FadedDancer.prototype.step = function(){
  oldStep.call(this, this._timeBetweenSteps);

  var thisDancer = this.$node;

  if(this._keepDancing) {
    var moveDist = '25px';

    thisDancer.animate({
      width: '100px',
      height: '100px',
      left: '-=' + moveDist,
      top: '-=' + moveDist,
      opacity:'-=0.75'
    });
    thisDancer.animate({
      width: '50px',
      height: '50px',
      left: '+=' + moveDist,
      top: '+=' + moveDist,
      opacity:'+=0.75'
    });
  } else {
    var styleSettings = {
      width: '50px',
      height: '50px',
      opacity:'1'
    };
    thisDancer.css(styleSettings);
    thisDancer.stop(true, true);
  }
};