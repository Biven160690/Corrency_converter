import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { GET_CONVERSIONS_CORRENCIES, GET_ENTERED_USERS_DATA, GET_SELECTED_USERS_CURRENCIE, GET_REQUEST_ERROR } from '../constants'

function selectedUsersCurrencie (state = [], action) {
  switch (action.type) {
    case GET_SELECTED_USERS_CURRENCIE:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

function enteredUsersData (state = { value: 0 }, action) {
  switch (action.type) {
    case GET_ENTERED_USERS_DATA:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

function convertionsCurrencies (state = { isLoading: true }, action) {
  switch (action.type) {
    case GET_CONVERSIONS_CORRENCIES: {
      return Object.assign({}, state, {
        isLoading: false,
      }, action.payload)
    }
    case GET_REQUEST_ERROR: {
      return {
        ...state, isLoading: false, error: action.payload,
      }
    }
    default:
      return state
  }
}

const persistConfig = {
  key: 'selectedUsersCurrencie',
  storage,
}

export default combineReducers({
  selectedUsersCurrencie: persistReducer(persistConfig, selectedUsersCurrencie),
  enteredUsersData,
  convertionsCurrencies,
})
