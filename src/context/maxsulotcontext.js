import React,{useState,createContext} from 'react';
import {MaxsulotData} from '../mock/maxsulot'
export const MaxsulotContext = createContext()

export const MaxsulotContextProvider = ({children}) => {
    const [maxdata, setMaxdata] = useState(MaxsulotData)
  return <MaxsulotContext.Provider value={[maxdata, setMaxdata]}>
      {children}
  </MaxsulotContext.Provider>
};


