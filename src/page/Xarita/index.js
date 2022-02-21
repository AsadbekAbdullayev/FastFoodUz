import React from 'react';
import Sidebar from '../../component/sidebar'
import Xaa from './Map';
const Xarita = () => {

  return <div> <div style={{display:'flex',background: '#E5E5E5'}}>
  <Sidebar/>
  <div>
  <h1>Xarita</h1>
  <div style={{zIndex:999}} >
 <Xaa/>

  </div>
  </div>
</div>
</div>
};

export default Xarita;
