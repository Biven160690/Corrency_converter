import React from 'react'
import { CircularProgress, Typography } from '@mui/material'

import CollectionFormsComponents from './form/CollectionFormsComponents'
import { useStyles } from '../theme/style'
import useConverter from '../hooks/useConverter'

function CurrenciesConverter () {
  const classes = useStyles()

  const {
    defaultForms,
    allСurrencies,
    isLoading,
    error,
    converter,
    selectedUsersCurrencie,
  } = useConverter()

  return (
  <>
    <Typography variant="h3" align="center" component="div">
          Currency Converter
    </Typography>
        { error ||
          <div className={classes.root}>
            {isLoading
              ? <CircularProgress />
              : <>
                  {defaultForms.map(formsValue => {
                    return (
                      <CollectionFormsComponents
                      allСurrencies={allСurrencies}
                      key={formsValue}
                      name={formsValue}
                      selectedCurrency={ selectedUsersCurrencie[formsValue]?.value ||
                        formsValue }
                      value={converter(formsValue)}/>
                    )
                  })
                }
                </>
              }
          </div>
        }
  </>
  )
}

export default CurrenciesConverter
