var SquareDancer = function(top, left){
  Dancer.call(this, top, left, 100);
};

SquareDancer.prototype = new Dancer();
SquareDancer.prototype.constructor = SquareDancer;

var oldStep = SquareDancer.prototype.step;

SquareDancer.prototype.step = function(){
  oldStep.call(this, 100);

  thisDancer = this.$node;
  var corners = Math.random()*30;

  if(this._keepDancing) {
    thisDancer.animate({
      'border-radius': '+=' + corners
    });
    thisDancer.animate({
      'border-radius': '-=' + corners
    });
  } else{
    thisDancer.stop(true, true);
  }
};