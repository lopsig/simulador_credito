// CALCULATE FUNCTIONS
const calculateAvailableBalance = (income, expenses) => {
  let availableBalance = parseFloat(income - expenses).toFixed(2);

  if (availableBalance < 0) {
    return "0.00";
  }

  return availableBalance;
};

const calculateAbilityPay = (availableBalance) => {
  let abilityPay = parseFloat(availableBalance * 0.5).toFixed(2);

  if (abilityPay <= 0) {
    return "0.00";
  }
  return abilityPay;
};

const calculateSimpleInterest = (amount, rate, term) => {
  interestRate = rate / 100;

  let simpleInterest = term * amount * interestRate;

  return simpleInterest;
};

const calculateTotal = (amount, simpleInterest) => {
  let total = amount + simpleInterest + 100

  return total
}

const calculateMonthlyPayment = (total, term) => {
  let monthlyTerm = term * 12;
  let monthlyPayment = parseFloat(total / monthlyTerm).toFixed(2)

  return monthlyPayment
}

const approveCredit = (abilityPay, monthlyPayment) => {

  return parseFloat(abilityPay) > parseFloat(monthlyPayment)
}

//UTIL FUNCTIONS
const recoverText = (idComponent) => {
  let component = document.getElementById(idComponent);
  let value = component.value;

  return value;
};

const recoverFloat = (idComponent) => {
  let valueText = recoverText(idComponent);
  let valueFloat = parseFloat(valueText);

  return valueFloat;
};

const recoverInt = (idComponent) => {
  let valueText = recoverText(idComponent);
  let valueInt = parseInt(valueText);

  return valueInt;
};

const showSpan = (idComponent, value) => {
  let component = document.getElementById(idComponent);
  component.textContent = "USD " + value;
};

const showSpanCredit = (idComponent, value) => {
  let component = document.getElementById(idComponent);

  if (value == true) {
    component.textContent = "CRÉDITO APROBADO";
    component.className = "estado-badge aprobado"; 
  } else {
    component.textContent = "CRÉDITO RECHAZADO";
    component.className = "estado-badge rechazado";

  }
  
};
