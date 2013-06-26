// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<div class="dancer"></div>');
  this._timeBetweenSteps = timeBetweenSteps;
  this._keepDancing = true;
  this._oldLeft = left;
  this._oldTop = top;

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

  setTimeout(function(){
    self.step();
  }, this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(left){
  this._keepDancing = !this._keepDancing;
  var styleSettings = {
    left: this._oldLeft + 'px'
  };

  if(this._keepDancing) {
    this.$node.css(styleSettings);
    this.step();
  } else {
    this.$node.stop(true, true);
    styleSettings = {
      left: left + 'px'
    };
    this.$node.css(styleSettings);
  }

  this.$node.toggleClass('dancer-posleft');
};