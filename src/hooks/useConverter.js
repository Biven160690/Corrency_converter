import { useSelector } from 'react-redux'

import { reselect } from '../selectors'

function useConverter () {
  const {
    defaultForms,
    allСurrencies,
    isLoading,
    selectedUsersCurrencie,
    enteredUsersData,
    rates,
    error,
  } = useSelector(reselect)

  function converter (formsValue) {
    const activeInput = enteredUsersData.activeInputsName
    const selectedCurrency = rates[selectedUsersCurrencie[activeInput]?.value]
    const ratesFormsActive = selectedCurrency || rates[enteredUsersData.activeInputsName]
    const ratesOtherForm = rates[selectedUsersCurrencie[formsValue]?.value ||
    formsValue]

    const resultOfConverter = activeInput === formsValue
      ? enteredUsersData.value
      : (enteredUsersData.value / ratesFormsActive * ratesOtherForm).toFixed(2)
    return (+resultOfConverter || enteredUsersData.value)
  }
  return {
    defaultForms,
    allСurrencies,
    isLoading,
    error,
    converter,
    selectedUsersCurrencie,
  }
}
export default useConverter
