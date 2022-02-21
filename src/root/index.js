import React from 'react';
import { Routes,Route,Navigate } from 'react-router';
import {SidebarData} from '../utils/index'

const Root = () => {
  return <div >

       <Routes>
      {
        SidebarData.map(({id,pathname,Element})=>
          <Route key={id} path={pathname} element={<Element/>}/>
        )
      }

    <Route path='/' element={<Navigate to={'/Buyurtmalar'}/>} />
    <Route path='*' element={<h1>NOT FOUND</h1>} />

  </Routes>
  </div>;
};

export default Root;
