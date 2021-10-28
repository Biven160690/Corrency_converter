import { GET_ENTERED_DATA_OF_USER, GET_SELECTED_CURRENCIES_OF_USER, GET_ERROR_OF_REQUEST, REQUEST_CONVERSIONS_FOR_CONVERTER } from '../constants'

export const conversionsCurrenciesForConverter = data => {
  return {
    payload: data,
    type: REQUEST_CONVERSIONS_FOR_CONVERTER,
  }
}

export const enteredDataOfUser = data => {
  return {
    payload: data,
    type: GET_ENTERED_DATA_OF_USER,
  }
}

export const selectedCurrenciesOfUser = data => {
  return {
    payload: data,
    type: GET_SELECTED_CURRENCIES_OF_USER,
  }
}

export const errorOfRequest = data => {
  return {
    payload: data,
    type: GET_ERROR_OF_REQUEST,
  }
}
