import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    display: theme.positionOfForms.display,
    justifyContent: theme.positionOfForms.justifyContent,
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      flexDirection: theme.positionOfForms.flexDirection,
      alignItems: theme.positionOfForms.alignItems[1],
      margin: theme.spacing(3),
    },
  },
  componentsOfForm: {
    margin: theme.spacing(1),
    background: theme.palette.background.paper,
    border: theme.borderColorOfForms.border,
    borderRadius: theme.spacing(0.5),
    '& div': {
      display: theme.positionOfForms.display,
      justifyContent: theme.positionOfForms.justifyContent,
      alignItems: theme.positionOfForms.alignItems[0],
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
      position: theme.positionOfForms.position,
      backgroundColor: theme.palette.background.paper,
      border: theme.borderColorOfForms.border,
      fontSize: theme.spacing(2),
      padding: theme.positionOfForms.padding,
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        borderRadius: theme.spacing(0.5),
        boxShadow: theme.shadows[20],
      },
    },
  },
}))
