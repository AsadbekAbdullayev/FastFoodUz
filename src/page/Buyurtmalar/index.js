import React,{useContext} from 'react';
import Sidebar from '../../component/sidebar'
import Header from '../../component/header'
import BuyurtmaCard from '../../component/card'
import {Container} from './styled'
import AddBuyurtma from '../../component/AddBuyurtma'
import { CategoryB } from '../../context/categoryB';
import {BuyurtmaContext} from '../../context/buyurtmacontext'
const Buyurtmalar = () => {
    const [cat, setCat] = useContext(CategoryB)
    const [buydata, setBuydata] = useContext(BuyurtmaContext)
    
  return  <div  >
  <div style={{display:'flex'
  }}>
  <Sidebar/>
  <div>
  <Header/>
<Container>
<AddBuyurtma/>
{
buydata.map(({id,name,vaqt,tel,zakasSumma,dastavkaSumma,summa,operator,filial,category})=>category === cat &&  <BuyurtmaCard
 id={id} key={id} operator={operator} filial={filial}
 name={name} vaqt={vaqt} tel={tel} zakasSumma={zakasSumma} dastavkaSumma={dastavkaSumma}
 summa={summa}
 />) 
}
  
</Container>
  </div>
  
</div>
</div>

};

export default Buyurtmalar;
