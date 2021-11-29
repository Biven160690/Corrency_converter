import React from 'react'
import { FormControl, InputLabel, InputBase, MenuItem, Select } from '@mui/material/'
import PropTypes from 'prop-types'

import { useStyles } from '@theme/style'

const Currencies = ({ allСurrencies, ...props }) => {
  const classes = useStyles()
  return (
    <FormControl variant="standard">
      <InputLabel> Сurrency </InputLabel>
      <Select {...props} input={<InputBase className={classes.inputBase }/>}>
        {allСurrencies.map(currency => (
          <MenuItem key={currency} value={currency}>
            {currency}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default React.memo(Currencies)

Currencies.propTypes = {
  allСurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
}
