import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import ShareIcon from '@material-ui/icons/Share';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CloseIcon from '@material-ui/icons/Close';
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { Avatar, Divider, Drawer, IconButton } from '@material-ui/core'
import Box from '@material-ui/core/Box'

import ImageCard from '../../components/Card'

import useStyles from './styles.js'
import { useState } from 'react'
import { useCallback } from 'react'
import NavOption from '../../components/side-bar/nav-option'
import AvatarPlaceHolderImg  from '../../assets/images/avatar-placeholder.jpg'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const navMenus = [
  { id: 1, link: 'https://material-ui.com/', title: 'Subtitle 2'},
  { id: 2, link: 'https://material-ui.com/', title: 'Subtitle 2'},
  { id: 3, link: 'https://material-ui.com/', title: 'Subtitle 2'},
  { id: 4, link: 'https://material-ui.com/', title: 'Subtitle 2'},
  { id: 5, link: 'https://material-ui.com/', title: 'Subtitle 2'},
  { id: 6, link: 'https://material-ui.com/', title: 'Subtitle 2'},
  { id: 7, link: 'https://material-ui.com/', title: 'Subtitle 2'},
  { id: 8, link: 'https://material-ui.com/', title: 'Subtitle 2'},
  { id: 9, link: 'https://material-ui.com/', title: 'Subtitle 2'},
]

export default function Album() {
  const styles = useStyles()

  const [isSideBarOpen, setSideBarOpen] = useState(false)

  const onToggleSideBar = useCallback(() => {
    setSideBarOpen(prevValue => !prevValue)
  }, [])

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className={styles.toolBar}>
          <IconButton aria-label={isSideBarOpen ? "close menu" : "open menu"} onClick={onToggleSideBar}>
            <MenuIcon className={styles.icon} />
          </IconButton>
          <Drawer open={isSideBarOpen} onClose={onToggleSideBar} className={styles.menuSideBar}>
            <Grid className={styles.sideBarContainer}>
              <Grid className={styles.userContainer}>
                <Grid>
                  <Avatar src={AvatarPlaceHolderImg} alt="User's avatar" className={styles.avatar} />
                  <Typography component="h1" variant="h6">Username</Typography>
                  <Typography className={styles.userDescription}>Lorem ipsum</Typography>
                </Grid>
                <IconButton onClick={onToggleSideBar} aria-label="Close sidebar" className={styles.closeSidebarButton}>
                  <CloseIcon />
                </IconButton>
              </Grid>
              <Divider />
              <Grid className={styles.navWrapper} container direction="column" justify="space-between">
                <Grid className={styles.navContainer}>
                  {navMenus.map(item => (
                    <Grid className={styles.navItemContainer}>
                      <NavOption key={item.id} title={item.title} link={item.link} hasIcon />
                    </Grid>
                  ))}
                </Grid>
                <Grid>
                  <NavOption textClassName={styles.settings} title="Settings" link="https://material-ui.com/"/>
                  <Button className={styles.logoutButton}>Logout</Button>
                </Grid>
              </Grid>
            </Grid>
          </Drawer>
          <Grid className={styles.actionIconsContainer}>
            <NotificationsIcon className={styles.icon} />
            <ShareIcon className={styles.icon} />
            <SearchIcon className={styles.icon} />
          </Grid>
        </Toolbar>
      </AppBar>
      <Box component="main">
        <Box className={styles.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography
              component="h2"
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <Box className={styles.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" className={styles.mainButton}>
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" className={styles.secondaryButton}>
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
        <Container className={styles.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <ImageCard />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  )
}
