import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  toolBar: {
    justifyContent: 'space-between',
  },
  sideBarContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  userContainer: {
    display: 'flex',
    padding: theme.spacing(2),
    columnGap: theme.spacing(18),
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  closeSidebarButton: {
    height: theme.spacing(6),
    width: theme.spacing(6),
  },
  navWrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
  },
  navContainer: {
    flex: 1,
  },
  navItemContainer: {
    marginBottom: theme.spacing(3),
  },
  settings: {
    opacity: 0.6,
    color: 'black',
    fontWeight: 500,
    textDecoration: 'none',
  },
  logoutButton: {
    marginTop: theme.spacing(3),
    padding: 0,
    opacity: 0.6,
    fontWeight: 500,
    '& .MuiButton-label': {
      padding: 0,
      justifyContent: 'flex-start',
    },
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  actionIconsContainer: {
    display: 'flex',
    columnGap: theme.spacing(2),
  },
  icon: {
    opacity: '0.74',
    fill: 'white',
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  mainButton: {
    borderRadius: theme.spacing(1),
  },
  secondaryButton: {
    borderRadius: theme.spacing(3),
  },
}))
