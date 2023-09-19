function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
      return bill * 0.15; // 15% tip
    } else {
      return bill * 0.2; // 20% tip
    }
  }
  
  const testBill = 100;
  const testTip = calcTip(testBill);
  console.log(`For a bill of ${testBill}, the tip is ${testTip}`);
  
  // Test data (bills)
  const bills = [125, 555, 44];
  
  const tips = [];
  for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
  }
  
  console.log("Tips for the bills:", tips);
  
  const total = [];
  for (let i = 0; i < bills.length; i++) {
    total.push(bills[i] + tips[i]);
  }
  
  console.log("Total values:", total);
  