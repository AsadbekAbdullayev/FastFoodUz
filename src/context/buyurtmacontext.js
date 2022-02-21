import React,{useState,createContext} from 'react';
import {BuyurtmaCardData} from '../mock/buyurtmacard'
export const BuyurtmaContext = createContext()

export const BuyurtmaContextProvider = ({children}) => {
    const [buydata, setBuydata] = useState(BuyurtmaCardData)
  return <BuyurtmaContext.Provider value={[buydata, setBuydata]}>
      {children}
  </BuyurtmaContext.Provider>
};


