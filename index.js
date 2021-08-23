const fs = require("fs");
const loader = require("@assemblyscript/loader");
const imports = { /* imports go here */ };
const wasmModule = loader.instantiateSync(fs.readFileSync(__dirname + "/build/optimized.wasm"), imports);

module.exports = wasmModule.exports;

sum = module.exports.add(10, 2);
console.log("sum:", sum);

product = module.exports.multiply(10, 2);
console.log("product:", product);
