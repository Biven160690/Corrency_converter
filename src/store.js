import { applyMiddleware, createStore } from 'redux'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

import reduser from './reducer'
import rootWatcher from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reduser, applyMiddleware(sagaMiddleware))
const persistor = persistStore(store)

sagaMiddleware.run(rootWatcher)

export { store, persistor }
