import React,{useContext} from 'react';
import Sidebar from '../../component/sidebar'
import HeaderMaxsulot from '../../component/headerMaxsulot';
import AddMaxsulot from '../../component/AddMaxsulot';
import {Container} from './styled'
import MaxsulotCard from '../../component/MaxsulotCard';
import {MaxsulotContext} from '../../context/maxsulotcontext'
const Maxsulotlar = () => {

  const [maxdata, setMaxdata] = useContext(MaxsulotContext)

  return <div> <div style={{display:'flex'}}>
  <Sidebar/>
  <div>
<AddMaxsulot/>
    
  <HeaderMaxsulot/>
  <Container>
    <Container.Navbar>
      <Container.Title>Maxsulot</Container.Title>
      <Container.Title>Nomi</Container.Title>
      <Container.Title>Narxi</Container.Title>
      <Container.Title>Qo’shimcha</Container.Title>
      <Container.Title>Action</Container.Title>
    </Container.Navbar>
    
   {
     maxdata.map(({id,nomi,narxi,qushimcha,img})=><MaxsulotCard key={id} id={id} nomi={nomi} narxi={narxi} qushimcha={qushimcha} img={img}/>)
   } 
    
  </Container>
  </div>
</div>
</div>
};

export default Maxsulotlar;
