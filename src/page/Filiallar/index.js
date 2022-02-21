import React,{useContext} from 'react';
import Sidebar from '../../component/sidebar'
import HeaderFilial from '../../component/headerFilial';
import {Container} from './styled'
import FilialCard from '../../component/FilialCard';
import AddFilial from '../../component/AddFilial';

import {FilialContext} from '../../context/filialcontex'

const Filiallar = () => {
  const [fildata, setFildata] = useContext(FilialContext)

  return <div> <div style={{display:'flex'}}>
  <Sidebar/>
  <div>
    <AddFilial/>
  <HeaderFilial/>
  <Container>
  <Container.Navbar>
      <Container.Title>Filial nomi (UZ)</Container.Title>
      <Container.Title>Filial nomi (Ru)</Container.Title>
      <Container.Title>Mo’ljal</Container.Title>
      <Container.Title>Ish vaqti</Container.Title>
      <Container.Title>Action</Container.Title>
    </Container.Navbar>
{
   
  fildata.map(({id,nomUz,nomRu,moljal,ishvaqti})=> <FilialCard key={id} id={id} nomUz={nomUz} nomRu={nomRu} moljal={moljal}  ishvaqti={ishvaqti}/>)

}

 
  </Container>

  </div>
</div>
</div>
};

export default Filiallar;
