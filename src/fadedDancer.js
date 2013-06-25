var FadedDancer = function(top, left){
  this.$node = $('<span class="image-dancer"><img src="swirl.gif" class="swirly" /></span>');
  this._timeBetweenSteps = 150;
  this.step();
  this.setPosition(top, left);
  this._keepDancing = true;
  this._top = top;
};

FadedDancer.prototype = Object.create(Dancer.prototype);
FadedDancer.prototype.constructor = FadedDancer;

var oldStep = FadedDancer.prototype.step;

FadedDancer.prototype.step = function(){

  oldStep.call(this, this._timeBetweenSteps);

  var swirlyImg = $(".swirly");
  var swirlySpan = $(".image-dancer");

  if(this._keepDancing === false) {
    swirlyImg.stop(true, true, true);
    swirlySpan.stop(true, true, true);
    var styleSettings = {
      left: '10px',
      opacity: '1',
      top: this._top
    };
    this.$node.css(styleSettings);
    swirlyImg.css({
      width: '50px',
      height: '50px',
      opacity:'1'
    });
  } else {
    var moveDist = '25px';

    swirlyImg.animate({
      width: '100px',
      height: '100px',
      opacity:'-=0.75'
    });
    swirlySpan.animate({
      left: '-=' + moveDist,
      top: '-=' + moveDist
    });
    swirlyImg.animate({
      width: '50px',
      height: '50px',
      opacity:'+=0.75'
    });
    swirlySpan.animate({
      left: '+=' + moveDist,
      top: '+=' + moveDist
    });
  }
};

FadedDancer.prototype.lineUp = function(left){
  this._keepDancing = false;
};