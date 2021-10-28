import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { GET_ENTERED_DATA_OF_USER, GET_SELECTED_CURRENCIES_OF_USER, GET_ERROR_OF_REQUEST, REQUEST_CONVERSIONS_FOR_CONVERTER } from '../constants'

function selectedCurrenciesOfUser (state = [], action) {
  switch (action.type) {
    case GET_SELECTED_CURRENCIES_OF_USER:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

function enteredValueOfUser (state = { value: 0 }, action) {
  switch (action.type) {
    case GET_ENTERED_DATA_OF_USER:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

function convertionsCurrencies (state = { isLoading: true }, action) {
  switch (action.type) {
    case REQUEST_CONVERSIONS_FOR_CONVERTER: {
      return Object.assign({}, state, {
        isLoading: false,
      }, action.payload)
    }
    case GET_ERROR_OF_REQUEST: {
      return {
        ...state, isLoading: false, error: action.payload,
      }
    }
    default:
      return state
  }
}

const persistConfig = {
  key: 'selectedCurrenciesOfUser',
  storage,
}

export default combineReducers({
  selectedCurrenciesOfUser: persistReducer(persistConfig, selectedCurrenciesOfUser),
  enteredValueOfUser,
  convertionsCurrencies,
})
