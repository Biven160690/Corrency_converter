import { React, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Input } from '@mui/material'
import PropTypes from 'prop-types'

import Currencies from './Currencies'
import { useStyles } from '@theme/style'
import { getEnteredUsersData, getSelectedUsersCurrencie } from '../../actions'

const CollectionFormsComponents = ({
  allСurrencies,
  name,
  selectedCurrency,
  value,
}) => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const handleChangeEnterData = e => {
    dispatch(getEnteredUsersData(
      { value: e.target.value, activeInputsName: e.target.name },
    ))
  }

  const handleChangeSelectedCurrencies = useCallback(e => {
    dispatch(getSelectedUsersCurrencie({ [e.target.name]: { value: e.target.value } },
    ))
  }, [selectedCurrency])

  return (
   <form className={classes.formsComponent}>
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

export default CollectionFormsComponents

CollectionFormsComponents.propTypes = {
  allСurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  selectedCurrency: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}
