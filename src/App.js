import React, { useState, createContext} from 'react';
import Home from './Pages/Main'


export const FirebaseContext = createContext();

function FirebaseProvider({ children }){
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

function App() {
  
  return (
    <FirebaseProvider>
      <Home/>
    </FirebaseProvider>
  );
}

export default App;
