const calculate = () => {
  if (!validateInputs()) return;

  let income = recoverFloat("txtIngresos");
  // let expenses = recoverFloat("txtEgresos");
  let arriendo = recoverFloat("txtArriendo");
  let alimentacion = recoverFloat("txtAlimentacion");
  let varios = recoverFloat("txtVarios");
  let expenses = parseFloat(
    calculateTotalExpenses(arriendo, alimentacion, varios),
  );
  showSpan("spnEgresos", expenses.toFixed(2));

  let balance = calculateAvailableBalance(income, expenses);

  showSpan("spnDisponible", balance);

  let abilityPay = calculateAbilityPay(balance);

  showSpan("spnCapacidadPago", abilityPay);

  let amount = recoverInt("txtMonto");
  let rate = recoverInt("txtTasaInteres");
  let term = recoverInt("txtPlazo");

  let simpleInterest = calculateSimpleInterest(amount, rate, term);
  showSpan("spnInteresPagar", simpleInterest);

  let total = calculateTotal(amount, simpleInterest);
  showSpan("spnTotalPrestamo", total);

  let monthlyPayment = calculateMonthlyPayment(total, term);
  showSpan("spnCuotaMensual", monthlyPayment);

  let approveCredits = approveCredit(abilityPay, monthlyPayment);
  console.log(approveCredits);
  showSpanCredit("spnEstadoCredito", approveCredits);
};;

const restart = () => {
  // Limpiar inputs
  clearInput("txtIngresos");
  // clearInput("txtEgresos");
  clearInput("txtArriendo");
  clearInput("txtAlimentacion");
  clearInput("txtVarios");
  clearInput("txtMonto");
  clearInput("txtPlazo");
  clearInput("txtTasaInteres");

  // Limpiar resultados
  clearResults("spnDisponible");
  clearResults("spnCapacidadPago");
  clearResults("spnInteresPagar");
  clearResults("spnTotalPrestamo");
  clearResults("spnCuotaMensual");
  clearResults("spnEgresos");

  // Resetear estado de crédito
  const stateCredit = document.getElementById("spnEstadoCredito");
  stateCredit.textContent = "ANALIZANDO...";
  stateCredit.className = "estado-credito";

  // Limpiar mensajes de error
  clearErrors("errIngresos");
  clearErrors("errEgresos");
  clearErrors("errMonto");
  clearErrors("errPlazo");
  clearErrors("errTasaInteres");
  clearErrors("errArriendo");
  clearErrors("errAlimentacion");
  clearErrors("errVarios");
};
