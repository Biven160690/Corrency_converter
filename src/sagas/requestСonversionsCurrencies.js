import { call, put } from 'redux-saga/effects'

import { getConversionsCurrencies, getRequestError } from '../actions'
import makeApiRequest from './makeApiRequest'

export default function * requestСonversionsCurrencies (nationalUsersСurrency) {
  try {
    const url = `${process.env.REACT_APP_API_CONVERSION_CURRENCIES}?api_key=${
      process.env.REACT_APP_SECRET_KEY}&base=${
        nationalUsersСurrency}&symbols=EUR,RUB,USD,${nationalUsersСurrency}`

    const response = yield call(makeApiRequest, url)
    const conversionCurrencies = response.data.response

    const {
      base,
      rates,
      allСurrencies = Object.keys(rates),
      defaultForms = [base, 'USD'],
    } = conversionCurrencies

    yield put(getConversionsCurrencies({
      rates,
      allСurrencies,
      defaultForms,
    }))
  } catch (error) {
    yield put(getRequestError(error.message))
  }
}
