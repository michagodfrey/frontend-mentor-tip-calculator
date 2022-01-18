const calculate = document.getElementById("reset");

calculate.addEventListener("click", () => {

  const bill = document.getElementById("bill").value;
  const tip = document.getElementById("tip").value;
  const people = document.getElementById("people").value;

  if (bill === '' || tip === '' || people === '') {
    alert('Please complete all fields');
  }

  let totalTip = bill / tip;

  tipPerPerson = totalTip / people;
  totalPerPerson = bill / people + tipPerPerson;

  let displayTotal = document.getElementById("display-total");
  let displayTip = document.getElementById("display-tip");

  displayTotal.innerHTML = `$${totalPerPerson.toFixed(2)}`;
  displayTip.innerHTML = `$${tipPerPerson.toFixed(2)}`;

});
