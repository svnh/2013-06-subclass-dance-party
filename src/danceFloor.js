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

var strobeStatus = false;

var strobeStrobe = function() {
  if(strobeStatus) {
    $("body").css({'background-color': get_random_color()});
    setTimeout(function() { strobeStrobe(); }, 100);
  }
};