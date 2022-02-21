import React,{useState,createContext} from 'react';

export const CategoryB = createContext()

export const CategoryBProvider = ({children}) => {
    const [cat, setCat] = useState("Yangi")
  return <CategoryB.Provider value={[cat, setCat]}>
      {children}
  </CategoryB.Provider>
};


