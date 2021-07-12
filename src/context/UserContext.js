import {createContext, useState} from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {

    const [user, setUser] = useState({
        uid: 0,
        email: ""
    })

    return (
        <UserContext.Provider value={{user, setUser}}>

            {props.children}

        </UserContext.Provider>
    )
}