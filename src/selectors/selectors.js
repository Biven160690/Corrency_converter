export function reselect (state) {
  const {
    defaultForms, allСurrencies, isLoading, rates, error,
  } = state.convecterCurrencies.convertionsCurrencies
  const { selectedUsersCurrencie, enteredUsersData } = state.convecterCurrencies

  return {
    defaultForms,
    allСurrencies,
    isLoading,
    selectedUsersCurrencie,
    enteredUsersData,
    rates,
    error,
  }
}
