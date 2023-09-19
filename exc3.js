// Data
const dolphinsScores = [96, 108, 89];
const koalasScores = [88, 91, 110];

// Function to calculate average score
const calculateAverage = (scores) => {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
};

const dolphinsAverage = calculateAverage(dolphinsScores);
const koalasAverage = calculateAverage(koalasScores);

console.log(`Dolphins' average score: ${dolphinsAverage}`);
console.log(`Koalas' average score: ${koalasAverage}`);

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log("Dolphins win!");
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
  console.log("Koalas win!");
} else if (
  dolphinsAverage === koalasAverage &&
  dolphinsAverage >= 100 &&
  koalasAverage >= 100
) {
  console.log("It's a draw!");
} else {
  console.log("No one wins the trophy.");
}
