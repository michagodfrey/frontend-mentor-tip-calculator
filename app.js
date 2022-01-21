

// tip calculation
document.getElementById("form").onchange = function() {

  // check if tip is entered with button or custom tip input
  let tip;
  let customTip = Number(document.getElementById("tip-custom").value);


  let setTip = (tip) => {
     return tip;
  }

  let selectTip = tip;

  // remove .btn-active class if custom tip used and set tip to customTip
  // else if selected tip is used set tip to that
  if (customTip > 0) {
    let removeActiveState = document.querySelectorAll(".btn--active");
    for (let i = 0; i < removeActiveState.length; i++) {
      removeActiveState[i].classList.remove("btn--active");
    }
    tip = customTip;
    selectTip = 0;
  } else if (selectTip > 0) {
    tip = selectTip;
  }

  // bill and people input variables
  let bill = Number(document.getElementById("bill").value);
  let people = Number(document.getElementById("people").value);

  // do tip calculation
  let tipPerPerson = (bill * (tip/100)) / people;
  let totalPerPerson = tipPerPerson + (bill / people);

  // display 'can't be zero' if bill input is zero
  if (bill === 0) {
    document.getElementById("bill").classList.add("error");
    document.getElementById("bill-zero").style.display = "flex";
  } else {
    document.getElementById("bill").classList.remove("error");
    document.getElementById("bill-zero").style.display = "none";
  }

  // the same as above except for the people input
  if (people === 0) {
    document.getElementById("people").classList.add("error");
    document.getElementById("people-zero").style.display = "flex";
  } else {
    document.getElementById("people").classList.remove("error");
    document.getElementById("people-zero").style.display = "none";
  }

  // darken reset button if nothing to reset
  if (tip === 0 && bill === 0 && people === 0) {
    document.getElementById("reset").classList.remove("btn--reset");
    document.getElementById("reset").classList.add("btn--deactive");
  } else {
    document.getElementById("reset").classList.remove("btn--deactive");
    document.getElementById("reset").classList.add("btn--reset");
  }

  // initialize output values to 0.00 prevent the output from displaying null and infinity
  if (isNaN(tipPerPerson) || !isFinite(tipPerPerson)) {
    tipPerPerson = 0.00;
    totalPerPerson = 0.00;
  }

  // display values
  document.getElementById("display-tip").value = `$${tipPerPerson.toFixed(2)}`;
  document.getElementById("display-total").value = `$${totalPerPerson.toFixed(2)}`;

};

// set tip with buttons and stylize on click
document.getElementById("buttons").addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    let removeActiveState = document.querySelectorAll(".btn--active");
    for (let i = 0; i < removeActiveState.length; i++) {
      removeActiveState[i].classList.remove("btn--active");
    }
    e.target.className = "btn btn--active";
    document.getElementById("tip-custom").value = "";
  }
});

// reset tip button and input styles on reset
document.getElementById("reset").addEventListener("click", () => {
  let removeActiveState = document.querySelectorAll(".btn--active");
  for (let i = 0; i < removeActiveState.length; i++) {
    removeActiveState[i].classList.remove("btn--active");
  }
  document.getElementById("bill").classList.remove("error");
  document.getElementById("bill-zero").style.display = "none";
  document.getElementById("people").classList.remove("error");
  document.getElementById("people-zero").style.display = "none";
  document.getElementById("reset").classList.remove("btn--reset");
  document.getElementById("reset").classList.add("btn--deactive");
});
