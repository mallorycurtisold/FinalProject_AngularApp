'use strict';

describe('Service: current', function () {

  // load the service's module
  beforeEach(module('finalProjectAngularAppApp'));

  // instantiate service
  var current;
  beforeEach(inject(function (_current_) {
    current = _current_;
  }));

  it('should do something', function () {
    expect(!!current).toBe(true);
  });

});
