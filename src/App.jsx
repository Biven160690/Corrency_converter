import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from '@mui/styles'

import CurrenciesConverter from './components/CurrenciesConverter'
import { store, persistor } from './store'
import theme from './theme/theme'

function App () {
  return (
   <Provider store={store}>
     <ThemeProvider theme={theme}>
       <PersistGate persistor={persistor}>
         <CurrenciesConverter />
       </PersistGate>
     </ThemeProvider>
   </Provider>
  )
}
export default App
