function validateArgs(...args) {
  return args.every((a) => typeof a === 'number');
}

function sum(a, b) {
  if (!validateArgs(a, b)) {
    throw new TypeError();
  }

  return a + b;
}

module.exports = sum;
