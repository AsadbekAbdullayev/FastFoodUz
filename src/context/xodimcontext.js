import React,{useState,createContext} from 'react';
import {MijozData} from '../mock/mijoz'
export const XodimContext = createContext()

export const XodimContextProvider = ({children}) => {
    const [midata, setMidata] = useState(MijozData)
  return <XodimContext.Provider value={[midata, setMidata]}>
      {children}
  </XodimContext.Provider>
};


