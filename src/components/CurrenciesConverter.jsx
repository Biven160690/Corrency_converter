import React from 'react'
import { useSelector } from 'react-redux'
import { CircularProgress, Typography } from '@mui/material'

import CollectionComponentsOfForm from './form/CollectionComponentsOfForm'
import { reselect } from '../selectors'
import { useStyles } from '../theme/style'

function CurrenciesConverter () {
  const classes = useStyles()

  const [
    defaultForms,
    allСurrencies,
    isLoading,
    selectedCurrenciesOfUser,
    enteredValueOfUser,
    rates,
    error,
  ] = useSelector(reselect)

  function converter (valueOfDefaultForm) {
    const activeInput = enteredValueOfUser.nameOfActiveInput
    const selectedCurrency = rates[selectedCurrenciesOfUser[activeInput]?.value]
    const ratesOfActiveForm = selectedCurrency || rates[enteredValueOfUser.nameOfActiveInput]
    const ratesOfOtherForm = rates[selectedCurrenciesOfUser[valueOfDefaultForm]?.value ||
     valueOfDefaultForm]

    const resultOfConverter = activeInput === valueOfDefaultForm
      ? enteredValueOfUser.value
      : (enteredValueOfUser.value / ratesOfActiveForm * ratesOfOtherForm).toFixed(2)
    return (+resultOfConverter || enteredValueOfUser.value)
  }

  return (
  <>
    <Typography variant="h3" align="center" component="div">
          Currency Converter
    </Typography>
        { error ||
          (<div className={classes.root}>
            {isLoading
              ? (<CircularProgress />)
              : (<>
                    {defaultForms.map(valueOfDefaultForm => {
                      return (
                        <CollectionComponentsOfForm
                        allСurrencies={allСurrencies}
                        key={valueOfDefaultForm}
                        name={valueOfDefaultForm}
                        selectedCurrency={ selectedCurrenciesOfUser[valueOfDefaultForm]?.value ||
                            valueOfDefaultForm }
                        value={converter(valueOfDefaultForm)}/>
                      )
                    })
                  }
                 </>
                )
              }
           </div>
          )
        }
  </>
  )
}

export default CurrenciesConverter
