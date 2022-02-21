import React,{useState,createContext} from 'react';
import {FilialData} from '../mock/filial'
export const FilialContext = createContext()

export const FilialContextProvider = ({children}) => {
    const [fildata, setFildata] = useState(FilialData)
  return <FilialContext.Provider value={[fildata, setFildata] }>
      {children}
  </FilialContext.Provider>
};


