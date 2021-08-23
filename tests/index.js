const assert = require("assert");
const myModule = require("..");
assert.strictEqual(myModule.add(1, 2), 3);
assert.strictEqual(myModule.multiply(10, 2), 20);
console.log("ok");
