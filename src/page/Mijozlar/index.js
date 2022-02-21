import React,{useContext} from 'react';
import {Container} from './styled'
import Sidebar from '../../component/sidebar'
import HeaderMijoz from '../../component/headerMijoz'
import MijozCard from '../../component/MijozCard';
import {XodimContext} from '../../context/xodimcontext'
import AddMijoz from '../../component/AddMijoz'
const Mijozlar = () => {

  const [mijozdata, setMijozdata] = useContext(XodimContext)

  return <div> <div style={{display:'flex'}}>
  <Sidebar/>
  <div>
    <AddMijoz/>
  <HeaderMijoz/>
    <Container>
    <Container.Navbar>
      <Container.Title>Mijoz ismi</Container.Title>
      <Container.Title>Telefon raqam</Container.Title>
      <Container.Title>Buyurtmalar soni</Container.Title>
      <Container.Title>Status</Container.Title>
      <Container.Title>Action</Container.Title>
    </Container.Navbar>
    {
      mijozdata.map(({id,ism,tel,buyurtmaSoni,status})=><MijozCard key={id} id={id} ism={ism} tel={tel} buyurtmaSoni={buyurtmaSoni} status={status} />)
    }
  
    </Container>

  </div>
</div>
</div>
};

export default Mijozlar;
