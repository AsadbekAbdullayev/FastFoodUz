import React,{useContext} from 'react';
import {Container} from './styled';
import plus from '../../assets/plus.svg'
import {AddMaxsulotToggle} from '../../context/AddMaxsulot'


const HeaderMijoz = () => {
  const [Addtogle, setAddtogle] = useContext(AddMaxsulotToggle)

  return (
  <Container>
    <Container.Add>
    <Container.AddLogoCon onClick={()=>setAddtogle(true)}>
      <Container.AddLogo src={plus}/>
    </Container.AddLogoCon>

    <Container.AddTitle>
    Yangi mijoz
qo’shish
    </Container.AddTitle>
    </Container.Add>


    
  </Container>)
};

export default HeaderMijoz;
