// input fields
let cardholderInput = document.getElementById("cardholder");
let cardNumberInput = document.getElementById("cardnumber");
let monthexpireInput = document.getElementById("monthexpiry");
let yearexpireInput = document.getElementById("yearexpiry");
let cvcInput = document.getElementById("cardcvc");

// output fields
let cardholderOutput = document.getElementById("name");
let cardnumberOutput = document.getElementById("number");
let monthexpireOutput = document.getElementById("month");
let yearexpireOutput = document.getElementById("year");
let cvcOutput = document.getElementById("cvc");

// main form and thenk you page
let main = document.getElementById("main");
let thanks = document.getElementById("thanks");

//  error states
let errorname, errornum, errormonth, erroryear, errorcvc, errornumnew;
errorname = document.getElementById("errorname");
errornum = document.getElementById("errornum");
errormonth = document.getElementById("errormonth");
erroryear = document.getElementById("erroryear");
errorcvc = document.getElementById("errorcvc");
errornumnew = document.getElementById("errornumnew");

// function handling update
function update() {
  cardholderOutput.innerHTML = cardholderInput.value;
  cardnumberOutput.innerHTML = cardNumberInput.value;
  monthexpireOutput.innerHTML = monthexpireInput.value;
  yearexpireOutput.innerHTML = yearexpireInput.value;
  cvcOutput.innerHTML = cvcInput.value;

  if (cardholderInput.value === "") {
    cardholderOutput.innerHTML = "Young lite";
  }
  if (cardNumberInput.value === "") {
    cardnumberOutput.innerHTML = "0000 0000 0000 0000";
  }
  if (monthexpireInput.value === "") {
    monthexpireOutput.innerHTML = "00";
  }
  if (yearexpireInput.value === "") {
    yearexpireOutput.innerHTML = "00";
  }
  if (cvcInput.value === "") {
    cvcOutput.innerHTML = "000";
  }
}
function reset() {
  // navigate to thanks modal
  thanks.style.display = "flex";
  main.style.display = "none";

  if (cardholderInput.value === "") {
    errorname.style.display = "flex";
    thanks.style.display = "none";
    main.style.display = "flex";
  }
  if (cardNumberInput.value === "") {
    errornum.style.display = "flex";
    thanks.style.display = "none";
    main.style.display = "flex";
  }

  if (monthexpireInput.value === "") {
    errormonth.style.display = "flex";
    thanks.style.display = "none";
    main.style.display = "flex";
  }
  if (yearexpireInput.value === "") {
    erroryear.style.display = "flex";
    thanks.style.display = "none";
    main.style.display = "flex";
  }
  if (cvcInput.value === "") {
    errorcvc.style.display = "flex";
    thanks.style.display = "none";
    main.style.display = "flex";
  }
    const value = cardNumberInput.value;
    // regex=regular expressions
    // regex explanation: \D matches any character that is not a digit
    if (/\D/g.test(value)) {
      thanks.style.display = "none";
      main.style.display = "flex";
      errornumnew.style.display = "flex";
      // cardNumberInput.value=value.replace(/\D/g),''
    }
    // cardNumberInput.addEventListener("input", () => {
    //   const value = cardNumberInput.value;
    //   // regex=regular expressions
    //   // regex explanation: \D matches any character that is not a digit
    //   if (/\D/g.test(value)) {
    //     thanks.style.display = "none";
    //     main.style.display = "flex";
    //     errornumnew.style.display = "flex";
    //     // cardNumberInput.value=value.replace(/\D/g),''
    //   }
    // });
}
cardNumberInput.addEventListener("input", () => {
  const value = cardNumberInput.value;
  // regex=regular expressions
  // regex explanation: \D matches any character that is not a digit
  if (/\D/g.test(value)) {
    thanks.style.display = "none";
    main.style.display = "flex";
    errornumnew.style.display = "flex";
    // cardNumberInput.value=value.replace(/\D/g),''
  }
});
cardholderInput.addEventListener("input", () => {
  if (cardholderInput.value.trim() !== "") {
    errorname.style.display = "none";
  }
});
cardNumberInput.addEventListener("input", () => {
  if (cardNumberInput.value.trim() !== "") {
    errornum.style.display = "none";
    errornumnew.style.display = "none";
  }
});
monthexpireInput.addEventListener("input", () => {
  if (monthexpireInput.value.trim() !== "") {
    errormonth.style.display = "none";
  }
});
yearexpireInput.addEventListener("input", () => {
  if (yearexpireInput.value.trim() !== "") {
    erroryear.style.display = "none";
  }
});
cvcInput.addEventListener("input", () => {
  if (cvcInput.value.trim() !== "") {
    errorcvc.style.display = "none";
  }
});

function exit() {
  cardholderInput.value = "";
  cardholderOutput.innerHTML = "Young lite";
  cardNumberInput.value = "";
  cardnumberOutput.innerHTML = "0000 0000 0000 0000";
  monthexpireInput.value = "";
  monthexpireOutput.innerHTML = "00";
  yearexpireInput.value = "";
  yearexpireOutput.innerHTML = "00";
  cvcInput.value = "";
  cvcOutput.innerHTML = "000";
  thanks.style.display = "none";
  main.style.display = "flex";
}
