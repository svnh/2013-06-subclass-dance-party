var get_random_color = function() {
  function c() {
    return Math.floor(Math.random()*256).toString(16);
  }
  return "#"+c()+c()+c();
};

var lineUpDancers = function() {
  _.each(window.dancers, function(dancer){
    dancer.lineUp(10);
  });
};

var strobeStrobe = function() {
  $("body").css({'background-color': '#000'});
};