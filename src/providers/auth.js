import React, {useState} from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const [user, setUser] = useState({
        name: '',
    }) 

    const [rucas, setRucas] = useState({
        bonito: ''
    })

    return(
        <AuthContext.Provider value={{user, setUser, rucas, setRucas}}> 
            {props.children}    
        </AuthContext.Provider>        
    )
}