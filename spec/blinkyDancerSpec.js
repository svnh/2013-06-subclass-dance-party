describe("blinkyDancer", function() {
  var blinkyDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    // sets up a way to delay this test -- used below
    jasmine.Clock.useMock();

    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(blinkyDancer.$node).toEqual(jasmine.any(jQuery));
  });

  it("should have a step function that makes its node blink", function() {
    spyOn(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle).toHaveBeenCalled();
  });
});

describe("twoStepDancer", function() {
  var twoStepDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    // sets up a way to delay this test -- used below
    jasmine.Clock.useMock();

    twoStepDancer = new TwoStepDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(twoStepDancer.$node).toEqual(jasmine.any(jQuery));
  });

  it("should have an animate function that makes it two-step", function() {
    spyOn(twoStepDancer.$node, 'animate');
    twoStepDancer.step();
    expect(twoStepDancer.$node.animate).toHaveBeenCalled();
  });
});

describe("fadedDancer", function() {
  var fadedDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    // sets up a way to delay this test -- used below
    jasmine.Clock.useMock();

    fadedDancer = new FadedDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(fadedDancer.$node).toEqual(jasmine.any(jQuery));
  });

  it("should have an animate function that makes it fade", function() {
    spyOn(fadedDancer.$node, 'animate');
    fadedDancer.step();
    expect(fadedDancer.$node.animate).toHaveBeenCalled();
  });
});