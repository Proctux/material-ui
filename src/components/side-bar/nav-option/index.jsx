import React from 'react'
import { Grid, Link, Typography } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';

import useStyles from './styles'

const NavOption = ({ link, title, hasIcon, textClassName, className }) => {
  const styles = useStyles()

  return (
    <Grid className={styles.navContainer}>
      {hasIcon && (
        <FavoriteIcon className={styles.icon}/>
      )}
      <Link to={link}>
        <Typography className={textClassName}>{title}</Typography>
      </Link>
    </Grid>
  )
}

export default NavOption
