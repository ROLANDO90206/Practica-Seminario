import React from 'react'
import { useUserContext, useUserToggleContext } from '../UserProviderLave';
import Style from './UseContextLLave.module.css'

const UseContextLLave = () => {
    const user = useUserContext();
    const changeLogin = useUserToggleContext();
  return (
    <div>
        {user && <p className={Style.user}>{user.perfil}{user.name} {user.lastName}
        </p>}
        <button className={Style.Button} onClick={changeLogin}>CAMBIAR LOGIN</button><br/>
    </div>
  )
}

export default UseContextLLave
