import { call } from 'redux-saga/effects'

import requestUsersGeoData from './requestUsersGeoData'
import requestСonversionsCurrencies from './requestСonversionsCurrencies'

function * requestsAll () {
  const nationalUsersСurrency = yield call(requestUsersGeoData)
  yield call(requestСonversionsCurrencies, nationalUsersСurrency)
}

export default function * rootWatcher () {
  yield call(requestsAll)
}
