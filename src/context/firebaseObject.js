import React, { createContext, useState, useContext, } from 'react';

const FirebaseContext = createContext();

export default function FirebaseProvider({ children }){
    const [ contactObjects, setContactObjects ] = useState({})
    const [ currentId, setCurrentId ] = useState('')

    return (
        <FirebaseContext.Provider value={{
            contactObjects,
            setContactObjects,
            currentId,
            setCurrentId
        }}>
            { children }
        </FirebaseContext.Provider>
    )
}

export function useFire(){
    const context = useContext(FirebaseContext);
    const { contactObjects, setContactObjects, currentId, setCurrentId } = context;
    if (!context) throw new Error('useFire must be used within a FirabaseProvider');

    
    return(
        contactObjects,
        setContactObjects,
        currentId,
        setCurrentId
    )
}

