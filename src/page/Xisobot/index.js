import React from 'react';
import XisobotGrafik from './xisobot'
import Sidebar from '../../component/sidebar'
import  './master.css'
const Xisobot = () => {
  
    
    return <div> <div style={{display:'flex',background: '#E5E5E5'}}>
  <Sidebar/>
  <div>
    <h1>Xisobot </h1>
  <XisobotGrafik/>
  </div>
</div>
</div>
};

export default Xisobot;
