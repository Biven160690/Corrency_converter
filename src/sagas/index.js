import { call } from 'redux-saga/effects'

import requestGeoData from './requestGeoData'
import requestСonversionsCurrencies from './requestСonversionsCurrencies'

function * requestsAll () {
  const nationalСurrencyOfUser = yield call(requestGeoData)
  yield call(requestСonversionsCurrencies, nationalСurrencyOfUser)
}

export default function * rootWatcher () {
  yield call(requestsAll)
}
