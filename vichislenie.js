var KU = function(a, b, c) {
  var D = Math.pow(b, 2) - 4 * a * c;
  if (D < 0) {
    return undefined;
  }

  return [
    "x1 = " + (-b - Math.sqrt(D)) / (2 * a),
    "x2 = " + (b - Math.sqrt(D)) / (2 * a)
  ];
};
