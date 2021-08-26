import React from 'react'
import { Grid, Link } from '@material-ui/core'
import classnames from 'classnames'
import FavoriteIcon from '@material-ui/icons/Favorite';

import useStyles from './styles'

const NavOption = ({ link, title, hasIcon, textClassName, className }) => {
  const styles = useStyles()

  return (
    <Grid className={classnames(styles.navContainer, className)}>
      {hasIcon && (
        <FavoriteIcon className={styles.icon}/>
      )}
      <Link className={classnames(styles.link, textClassName)} to={link}>
        {title}
      </Link>
    </Grid>
  )
}

export default NavOption
