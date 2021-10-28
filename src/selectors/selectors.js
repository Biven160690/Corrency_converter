export function reselect (state) {
  const {
    defaultForms, allСurrencies, isLoading, rates, error,
  } = state.convecterCurrencies.convertionsCurrencies
  const { selectedCurrenciesOfUser, enteredValueOfUser } = state.convecterCurrencies

  return [
    defaultForms,
    allСurrencies,
    isLoading,
    selectedCurrenciesOfUser,
    enteredValueOfUser,
    rates,
    error,
  ]
}
