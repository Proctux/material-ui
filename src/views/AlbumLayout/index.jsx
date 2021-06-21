import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

import ImageCard from '../../components/Card'

import useStyles from './styles.js'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function Album() {
  const styles = useStyles()

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <MenuIcon className={styles.icon} />
          <Typography component="h1" variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
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
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
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
