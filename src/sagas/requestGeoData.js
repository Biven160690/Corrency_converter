import { call, put } from 'redux-saga/effects'

import { errorOfRequest } from '../actions'
import makeApiRequest from './makeApiRequest'

export default function * requestGeoData () {
  try {
    const url = process.env.REACT_APP_API_GEO_DATA

    const geoDataOfUser = yield call(makeApiRequest, url)
    const nationalСurrencyOfUser = geoDataOfUser.data.geoplugin_currencyCode

    return nationalСurrencyOfUser
  } catch (error) {
    yield put(errorOfRequest(error))
  }
}
