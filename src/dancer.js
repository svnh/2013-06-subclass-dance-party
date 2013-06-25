// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<div class="dancer"></div>');
  this._timeBetweenSteps = timeBetweenSteps;
  this._keepDancing = true;

  var colour = get_random_color();
  var styleSettings = { 'background-color': colour };
  this.$node.css(styleSettings);

  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    var self = this;

    setTimeout(function(){            //  why do we need anonymous function instead of self.step?
      self.step();
    }, this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  /* Use css top and left properties to position our <span> tag
   * where it belongs on the page. See http://api.jquery.com/css/
   */

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(left){
  this._keepDancing = false;
  this.$node.stop(true, true);
    var styleSettings = {
    left: left + 'px'
  };
  this.$node.css(styleSettings);
};