import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  navContainer: {
    display: 'flex',
    columnGap: theme.spacing(4),
  },
  icon: {
    color: theme.palette.custom.gray64,
  },
  link: {
    cursor: 'pointer',
    color: theme.palette.custom.gray64,
    fontWeight: 500,
    fontSize: theme.spacing(1.75),
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}))
