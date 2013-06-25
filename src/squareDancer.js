var SquareDancer = function(top, left){
  Dancer.call(this, top, left, 100);
};

SquareDancer.prototype = new Dancer();
SquareDancer.prototype.constructor = SquareDancer;

var oldStep = SquareDancer.prototype.step;

SquareDancer.prototype.step = function(){
  oldStep.call(this, 100);

  var corners = Math.random()*30;

  this.$node.animate({
    'border-radius': '+=' + corners
  });
    this.$node.animate({
    'border-radius': '-=' + corners
  });
};