var height;
var weight;
var bmi = function (height, weight) {
  var kl = weight / (height * 2);
  return kl;
};
let mark = bmi(80, 168);
let join = bmi(95, 196);
console.log(mark);
console.log(join);
const markHigherBMI = mark > join;

console.log(markHigherBMI);
if (markHigherBMI) {
  console.log("Chỉ số BMI của Mark cao hơn Join!");
  console.log(`Chỉ số BMI của Mark ${mark} cao hơn của John ${join}`);
} else {
  console.log("Chỉ số BMI của John cao hơn Mark!");
  console.log(`Chỉ số BMI của John ${join} cao hơn của Mark ${mark}`);
}
