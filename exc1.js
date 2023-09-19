var height;
var weight;
var bmi = function (height, weight) {
  var kl = weight / (height * 2);
  console.log(kl);
};
var mark = bmi(80, 168);
var bi = bmi(95, 196);
const markHigherBMI = mark > bi;
console.log(markHigherBMI);
