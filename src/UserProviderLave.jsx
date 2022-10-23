import Style from './UserProviderLave.module.css';
import React, {useState, useContext}from 'react';
import  fondo from './images/fondo.png';

const userContext = React.createContext();
const userToggleContext = React.createContext();

export function useUserContext() {
    return useContext(userContext);
}

export function useUserToggleContext() {
    return useContext(userToggleContext);
}

const UserProviderLave = (props) => {
    const [user, setUser] = useState(null);

    const changeLogin = () => {
        if (user) {
            setUser(null);
        } else {
            setUser({
                perfil:<img className={Style.image} src={fondo} alt='' />,
                name: 'Rolando',
                lastName: 'Llave Vargas'
            });
        }
    }
  return (
    <userContext.Provider value={user}>
        <userToggleContext.Provider value={changeLogin}>
            {props.children}
        </userToggleContext.Provider>
    </userContext.Provider>
  )
}

export default UserProviderLave
