document.getElementById("form").onchange = function() {
  let bill = Number(document.getElementById("bill").value);
  let people = Number(document.getElementById("people").value);
  let tip = Number(document.getElementById("tip-custom").value);

  let tipPerPerson = (bill * (tip/100)) / people;
  let totalPerPerson = tipPerPerson + (bill / people);

  if (isNaN(tipPerPerson) || !isFinite(tipPerPerson)) {
    tipPerPerson = 0.00;
    totalPerPerson = 0.00;
  }

  document.getElementById("display-tip").innerHTML = `$${tipPerPerson.toFixed(2)}`;
  document.getElementById("display-total").innerHTML = `$${totalPerPerson.toFixed(2)}`;

};

const test = document.getElementById("test");

test.addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    let removeActiveState = document.querySelectorAll(".btn--active");
    for (let i = 0; i < removeActiveState.length; i++) {
      removeActiveState[i].classList.remove("btn--active");
    }
    e.target.className = "btn btn--active";
  }
});

function setTip(tip) {
  console.log(tip)
}
