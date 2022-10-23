import { Box, Grid } from '@material-ui/core';
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import AboutLlave from '../components/about/AboutLlave';
import HomeLlave from '../components/home/HomeLlave';
import NavbarLlave from './NavbarLlave';
import './RoutesLayoutLlave.css';

const RoutesLayoutLlave = () => {
  const [darkMode, setDarkMode] = useState(true);
  function handleClick() {
    setDarkMode(!darkMode);
  }
  return (
    <Grid container spacing={1} className={`content ${darkMode? 'dark': 'light'}`}>
      <Grid item xs={11} component={'header'} className={`${darkMode? 'dark': 'light'}`}>
        <NavbarLlave darkMode={darkMode} handleClick={handleClick} />
      </Grid>
      <Grid item xs={11} className={`container-content ${darkMode? 'dark': 'light'}`}>
        <Routes>
          <Route exact path={'/'} element={<HomeLlave />} />
          <Route exact path={'/about'} element={<AboutLlave />} />
        </Routes>
      </Grid>
      <Grid item xs={11} component={'footer'} >
        <Box className={`${darkMode? 'dark': 'light'} text-footer`}
        >
          <p>templade created with &hearts; by <a targett={'_blank'} href={'https://es.reactjs.org/'}>react js</a></p>
          <p>&copy; 2022</p>
        </Box>
      </Grid>
    </Grid>
  )
}

export default RoutesLayoutLlave
