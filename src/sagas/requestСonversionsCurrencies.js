import { call, put } from 'redux-saga/effects'

import { conversionsCurrenciesForConverter, errorOfRequest } from '../actions'
import makeApiRequest from './makeApiRequest'

export default function * requestСonversionsCurrencies (nationalСurrencyOfUser) {
  try {
    const url = `${process.env.REACT_APP_API_CONVERSION_CURRENCIES}?api_key=${
      process.env.REACT_APP_SECRET_KEY}&base=${
        nationalСurrencyOfUser}&symbols=EUR,RUB,USD,${nationalСurrencyOfUser}`

    const response = yield call(makeApiRequest, url)
    const conversionCurrencies = response.data.response

    const {
      base,
      rates,
      allСurrencies = Object.keys(rates),
      defaultForms = [base, 'USD'],
    } = conversionCurrencies

    yield put(conversionsCurrenciesForConverter({
      rates,
      allСurrencies,
      defaultForms,
    }))
  } catch (error) {
    yield put(errorOfRequest(error.message))
  }
}
