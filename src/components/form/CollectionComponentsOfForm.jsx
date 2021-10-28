import { React, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Input } from '@mui/material'
import PropTypes from 'prop-types'

import Currencies from './Currencies'
import { useStyles } from '@theme/style'
import { enteredDataOfUser, selectedCurrenciesOfUser } from '../../actions'

const CollectionComponentsOfForm = ({
  allСurrencies,
  name,
  selectedCurrency,
  value,
}) => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const handleChangeEnterData = useCallback(e => {
    dispatch(enteredDataOfUser(
      { value: e.target.value, nameOfActiveInput: e.target.name },
    ))
  }, [value])

  const handleChangeSelectedCurrencies = useCallback(e => {
    dispatch(selectedCurrenciesOfUser({ [e.target.name]: { value: e.target.value } },
    ))
  }, [selectedCurrency])

  return (
   <form className={classes.componentsOfForm}>
      <div>
        <div>
          <Currencies
            allСurrencies={allСurrencies}
            name={name}
            onChange={handleChangeSelectedCurrencies}
            value={selectedCurrency}/>
        </div>
        <div>
          <Input
            className={classes.input}
            color="secondary"
            name={name}
            onChange={handleChangeEnterData}
            type="text"
            value={value}/>
        </div>
      </div>
   </form>
  )
}

export default CollectionComponentsOfForm

CollectionComponentsOfForm.propTypes = {
  allСurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  selectedCurrency: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}
