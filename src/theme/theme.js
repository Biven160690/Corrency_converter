import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    secondary: {
      main: '#33eaff',
    },
    background:
     {
       paper: '#f7f7f7',
     },
  },
  borderColorOfForms: {
    border: '1px solid #ced4da',
  },
  positionOfForms: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: ['flex-end', 'center'],
    flexDirection: 'column',
    position: 'relative',
    padding: '10px 26px 10px 12px',
  },
})
export default theme
