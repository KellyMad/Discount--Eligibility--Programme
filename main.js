function checkEligibility() {
  const age = parseInt(document.getElementById("age").value);
  const membership = document.getElementById("membership").checked;
  let result;

  if (age >= 65) {
      result = "Eligible for senior discount";
  } else if (age >= 18 & membership) {
      result = "Congratulations! You are Eligible for a discount";
  } else {
      result = "Sorry! You are Not eligible for discount";
  }

  document.getElementById("result").innerHTML = result;
}