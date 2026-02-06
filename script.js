function calculate() {
  let loan = Number(document.getElementById("loan").value);
  let rate = Number(document.getElementById("rate").value);
  let tenureValue = Number(document.getElementById("tenureValue").value);
  let tenureType = document.getElementById("tenureType").value;

  if (!loan || !rate || !tenureValue) {
    alert("Please enter all values");
    return;
  }

  // Convert tenure to months
  let months = tenureType === "years"
    ? tenureValue * 12
    : tenureValue;

  // Bank rule (from image): 75% principal, 25% interest
  let principalMonths = Math.floor(months * 0.75);
  let interestMonths = months - principalMonths;

  let principalEMI = loan / principalMonths;
  let monthlyInterest = (loan * rate) / 12 / 100;

  let totalInterest = monthlyInterest * interestMonths;
  let totalRepayment = loan + totalInterest;

  document.getElementById("pCount").innerText = principalMonths;
  document.getElementById("pEmi").innerText = principalEMI.toFixed(0);

  document.getElementById("iCount").innerText = interestMonths;
  document.getElementById("iEmi").innerText = monthlyInterest.toFixed(0);

  document.getElementById("totalInterest").innerText = totalInterest.toFixed(0);
  document.getElementById("totalPay").innerText = totalRepayment.toFixed(0);
}
