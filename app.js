// tip calculation function, triggers when an input field changes
document.getElementById("form").oninput = function() {
  // tip variables, either selectTip (buttons) or customTip (input) will be used for tip value
  let tip;
  let selectTip = document.getElementById("tip-select").value;
  let customTip = Number(document.getElementById("tip-custom").value);

  // if custom tip input used, use that, otherwise use select tip if already selected
  if (customTip >= 0) {
    let removeActiveState = document.querySelectorAll(".tip-btn--active");
    for (let i = 0; i < removeActiveState.length; i++) {
      removeActiveState[i].classList.remove("tip-btn--active");
    }
    tip = customTip;
    selectTip = 0;
  } else if (selectTip > 0) {
    tip = selectTip;
  } else {
    tip = customTip;
  }

  // bill and people input variables
  let bill = Number(document.getElementById("bill").value);
  let people = Number(document.getElementById("people").value);

  // do tip calculation
  let tipPerPerson = (bill * (tip / 100)) / people;
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

  // darken reset button if nothing to reset, otherise set it to active class
  if (tip === 0 && bill === 0 && people === 0) {
    document.getElementById("reset").classList.remove("btn-reset");
    document.getElementById("reset").classList.add("btn-deactive");
  } else {
    document.getElementById("reset").classList.remove("btn-deactive");
    document.getElementById("reset").classList.add("btn-reset");
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

// set tip with buttons and calculate tip amounts
document.getElementById("buttons").addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    // edit button styles to display tip amount and reset cutom tip input value
    let removeActiveState = document.querySelectorAll(".tip-btn--active");
    for (let i = 0; i < removeActiveState.length; i++) {
      removeActiveState[i].classList.remove("tip-btn--active");
    }
    // activate reset button
    document.getElementById("reset").classList.remove("btn-deactive");
    document.getElementById("reset").classList.add("btn-reset");
    // set active style on selected tip button
    e.target.className = "tip-btn tip-btn--active";
    // clear custom tip input
    document.getElementById("tip-custom").value = "";

    // assign tip value for calculations
    let tip = e.target.value;

    // assign value to hidden input field, this value is used in the oninput function above
    document.getElementById("tip-select").value = tip;

    // bill and people input variables
    let bill = Number(document.getElementById("bill").value);
    let people = Number(document.getElementById("people").value);

    // do tip calculation
    let tipPerPerson = (bill * (tip / 100)) / people;
    let totalPerPerson = tipPerPerson + (bill / people);

    // initialize output values to 0.00 prevent the output from displaying null and infinity
    if (isNaN(tipPerPerson) || !isFinite(tipPerPerson)) {
      tipPerPerson = 0.00;
      totalPerPerson = 0.00;
    }

    // display values
    document.getElementById("display-tip").value = `$${tipPerPerson.toFixed(2)}`;
    document.getElementById("display-total").value = `$${totalPerPerson.toFixed(2)}`;
  }
});

// reset tip button and input styles on reset
document.getElementById("reset").addEventListener("click", () => {
  let removeActiveState = document.querySelectorAll(".tip-btn--active");
  for (let i = 0; i < removeActiveState.length; i++) {
    removeActiveState[i].classList.remove("tip-btn--active");
  }
  document.getElementById("bill").classList.remove("error");
  document.getElementById("bill-zero").style.display = "none";
  document.getElementById("people").classList.remove("error");
  document.getElementById("people-zero").style.display = "none";
  document.getElementById("reset").classList.remove("btn-reset");
  document.getElementById("reset").classList.add("btn-deactive");
  document.getElementById("tip-select").value = 0;
});
