import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    display: theme.formsPosition.display,
    justifyContent: theme.formsPosition.justifyContent,
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      flexDirection: theme.formsPosition.flexDirection,
      alignItems: theme.formsPosition.alignItems[1],
      margin: theme.spacing(3),
    },
  },
  formsComponent: {
    margin: theme.spacing(1),
    background: theme.palette.background.paper,
    border: theme.formsColorBorder.border,
    borderRadius: theme.spacing(0.5),
    '& div': {
      display: theme.formsPosition.display,
      justifyContent: theme.formsPosition.justifyContent,
      alignItems: theme.formsPosition.alignItems[0],
      padding: 2,
    },
  },
  input: {
    margin: theme.spacing(1),
  },
  inputBase: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: theme.spacing(1),
      position: theme.formsPosition.position,
      backgroundColor: theme.palette.background.paper,
      border: theme.formsColorBorder.border,
      fontSize: theme.spacing(2),
      padding: theme.formsPosition.padding,
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        borderRadius: theme.spacing(0.5),
        boxShadow: theme.shadows[20],
      },
    },
  },
}))
