import React from 'react';
import fondo from '../../images/web.png';
import me from '../../images/fondo.png';
import Style from './AboutLlave.module.css'

const AboutLlave = () => {
  return (
    <div>
      <h1 className={Style.H1}>Únete a la conversación, te invitamos a compartir</h1>
    <img className={Style.foto} src={fondo} alt='' />
    
    <img className={Style.profile} src={me} alt='' />
    </div>
  )
}

export default AboutLlave
