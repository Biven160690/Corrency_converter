import { call, put } from 'redux-saga/effects'

import { getRequestError } from '../actions'
import makeApiRequest from './makeApiRequest'

export default function * requestUsersGeoData () {
  try {
    const url = process.env.REACT_APP_API_GEO_DATA

    const geoUsersData = yield call(makeApiRequest, url)
    const nationalUsersСurrency = geoUsersData.data.geoplugin_currencyCode

    return nationalUsersСurrency
  } catch (error) {
    yield put(getRequestError(error))
  }
}
