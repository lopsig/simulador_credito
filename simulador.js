const calculate = () => {
  if (!validateInputs()) return;
  
  let income = recoverFloat("txtIngresos");
  let expenses = recoverFloat("txtEgresos");

  let balance = calculateAvailableBalance(income, expenses);

  showSpan("spnDisponible", balance);

  let abilityPay = calculateAbilityPay(balance);

  showSpan("spnCapacidadPago", abilityPay);

  let amount = recoverInt("txtMonto");
  let rate = recoverInt("txtTasaInteres");
  let term = recoverInt("txtPlazo");

  let simpleInterest = calculateSimpleInterest(amount, rate, term)
  showSpan("spnInteresPagar", simpleInterest);

  let total = calculateTotal(amount, simpleInterest)
  showSpan("spnTotalPrestamo", total);

  let monthlyPayment = calculateMonthlyPayment(total, term)
  showSpan("spnCuotaMensual", monthlyPayment);

  let approveCredits = approveCredit(abilityPay, monthlyPayment)
  console.log(approveCredits)
  showSpanCredit("spnEstadoCredito", approveCredits);

};
