const assert = require('assert');
const marksTools = require('./index');

assert.strictEqual(marksTools.percentage(45, 50), 90);
assert.strictEqual(marksTools.average([80, 70, 90]), 80);
assert.strictEqual(marksTools.getGrade(90), 'A');
assert.throws(function () {
  marksTools.percentage(10, 0);
});

console.log('All simple checks passed!');
