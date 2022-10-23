import { Box } from '@material-ui/core';
import React from 'react';
import { info } from '../../utilities/Info';
import fondo from '../../images/fondo.png';
import Style from './HomeLlave.module.css'
import EmojiBulletLlave from './EmojiBulletLlave';

const HomeLlave = () => {
  return (
    
    <Box>
      <img className={Style.profile} src={fondo} alt='' />
      <Box>
        <h1>Hi, I'm <span>{info.firstName} {info.lastName}</span><span>🤚</span>
        </h1>
        <h2>I'm {info.position}.</h2>
      </Box>
      <Box>
        <div className={Style.textandemoji}>
          {info.miniBio.map(bio => (
            <EmojiBulletLlave emoji={bio.emoji} text={bio.text} />
          ))}
        </div>
      </Box>
    </Box>
  )
}

export default HomeLlave
