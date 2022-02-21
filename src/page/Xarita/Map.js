import React from "react";
import {
  Map,
  Placemark,
  YMaps

} from "react-yandex-maps";
export const Xaa = () => {
  return (
    <div>
      <YMaps  >
        <Map
        style={{width:'931px',height:'534px',top:'200px', border:"8px solid #fff",margin:'10px 20px'}}
          
          defaultState={{
            center: [41.305815, 69.278402],
            zoom: 14,
            controls: [],
            
          }}
        >
         
          <Placemark geometry={[41.305815, 69.278402]} />
         
        </Map>
      </YMaps>
    </div>
  );
};
export default Xaa;

