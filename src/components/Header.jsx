import React from 'react'
import AppBar from '@mui/material/AppBar'
import Logo from '../stackline_logo.svg'
import {makeStyles} from '@mui/styles'
import Toolbar from '@mui/material/Toolbar'

const useStyles = makeStyles({
    imageIcon: {
        maxWidth: '10%',
        maxHeight: '20%',
    },
    iconRoot: {
      textAlign: 'center',
    },
    header: {
        maxWidth: "100vw",
        
    }
  });
function Header() {
    const classes = useStyles()
  return (
    <AppBar className = {classes.header}>
        <Toolbar>
            <img className={classes.imageIcon} src={Logo}/>
        </Toolbar>
    </AppBar>
  )
}

export default Header