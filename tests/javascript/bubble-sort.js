var expect = require('chai').expect;
var bubble_sort = require('../../solutions/javascript/insertion-sort');

describe('it tests bubble sort function', function(){
  var sorted = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var array = [9, 8, 7, 6, 5, 4, 3, 2, 1];

  it("sort array: " + sorted, function(){
    array = bubble_sort(array);
    expect(array).deep.equal(sorted);
  })

});
