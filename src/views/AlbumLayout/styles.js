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
  },
  navContainer: {
    flex: 1,
  },
  navItemContainer: {
    padding: theme.spacing(2),
    '&:hover': {
      backgroundColor: theme.palette.primary.redLightest,
      '& .MuiSvgIcon-root': {
        color: theme.palette.primary.main,
      },
      '& .MuiLink-root': {
        color: theme.palette.primary.main,
      },
    }
  },
  settings: {
    paddingLeft: theme.spacing(3),
  },
  logoutButton: {
    fontWeight: 500,
    color: theme.palette.custom.gray64,
    textTransform: 'none',
    padding: theme.spacing(3),
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
