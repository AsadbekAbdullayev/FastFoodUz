import React,{useState,createContext} from 'react';

export const AddMaxsulotToggle = createContext()

export const AddMaxsulotToggleProvider = ({children}) => {
    const [Addtogle, setAddtogle] = useState(false)
  return <AddMaxsulotToggle.Provider value={[Addtogle, setAddtogle]}>
      {children}
  </AddMaxsulotToggle.Provider>
};


