function calculateAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(
      "Dolphins win with a score of " + avgDolphins + " vs. " + avgKoalas
    );
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(
      "Koalas win with a score of " + avgKoalas + " vs. " + avgDolphins
    );
  } else {
    console.log("No team wins!");
  }
}

// Test data
const dolphinsScores1 = [44, 23, 71];
const koalasScores1 = [65, 54, 49];

const dolphinsScores2 = [85, 54, 41];
const koalasScores2 = [23, 34, 27];

const avgDolphins1 = calculateAverage(dolphinsScores1);
const avgKoalas1 = calculateAverage(koalasScores1);
checkWinner(avgDolphins1, avgKoalas1);

const avgDolphins2 = calculateAverage(dolphinsScores2);
const avgKoalas2 = calculateAverage(koalasScores2);
checkWinner(avgDolphins2, avgKoalas2);
