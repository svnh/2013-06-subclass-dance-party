var FadedDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="swirl.gif" class="swirly" />');
  this.setPosition(top, left);
  this._top = top;
  this._timeBetweenSteps = timeBetweenSteps;
  this.step();
};

FadedDancer.prototype = Object.create(Dancer.prototype);
FadedDancer.prototype.constructor = FadedDancer;

var oldStep = FadedDancer.prototype.step;

FadedDancer.prototype.step = function(){

  oldStep.call(this, this._timeBetweenSteps);

  var thisDancer = this.$node;

  if(this._keepDancing === false) {
    var styleSettings = {
      width: '50px',
      height: '50px',
      top: this._top,
      opacity:'1'
    };
    this.$node.css(styleSettings);
  } else {
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
  }
};