// Test data
const billValues = [275, 40, 430];

const calculateTip = (bill) => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

billValues.forEach((bill) => {
  const tip = calculateTip(bill);
  const total = bill + tip;
  console.log(`
  The bill was ${bill}, 
  the tip was ${tip}, and the total value ${total}`);

});
