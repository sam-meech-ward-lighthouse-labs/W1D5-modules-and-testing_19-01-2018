var assert = require('assert');
var pet = require('../pet');

describe('Pet', function() {
  describe('#fishName()', function() {
    it('should return a name with a  🐟 on the end', function() {
      var name = pet.fishName("Spongebob");
      assert.equal(name, "Spongebob 🐟");
    });
    it('should return 😢 when nothing is passed in', function() {
      var name = pet.fishName();
      assert.equal(name, "😢");
    });

    it('should return 🙅‍ when given an empty string', function() {
      var name = pet.fishName("");
      assert.equal(name, "🙅‍");
    });
  });
});