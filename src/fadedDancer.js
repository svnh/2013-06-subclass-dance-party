var FadedDancer = function(top, left){
  this.$node = $('<span class="image-dancer"><img src="swirl.gif" class="swirly" /></span>');
  this._timeBetweenSteps = 150;
  this.step();
  this.setPosition(top, left);
};

FadedDancer.prototype = Object.create(Dancer.prototype);
FadedDancer.prototype.constructor = FadedDancer;

var oldStep = FadedDancer.prototype.step;

FadedDancer.prototype.step = function(){
    oldStep.call(this, this._timeBetweenSteps);

    var moveDist = '25px';

    var swirlyImg = $(".swirly");
    var swirlySpan = $(".image-dancer");

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
};