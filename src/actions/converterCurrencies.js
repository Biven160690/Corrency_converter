import { GET_CONVERSIONS_CORRENCIES, GET_ENTERED_USERS_DATA, GET_SELECTED_USERS_CURRENCIE, GET_REQUEST_ERROR } from '../constants'

export const getConversionsCurrencies = data => {
  return {
    type: GET_CONVERSIONS_CORRENCIES,
    payload: data,
  }
}

export const getEnteredUsersData = data => {
  return {
    type: GET_ENTERED_USERS_DATA,
    payload: data,
  }
}

export const getSelectedUsersCurrencie = data => {
  return {
    type: GET_SELECTED_USERS_CURRENCIE,
    payload: data,
  }
}

export const getRequestError = data => {
  return {
    type: GET_REQUEST_ERROR,
    payload: data,
  }
}
