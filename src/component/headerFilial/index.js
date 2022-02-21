import React,{useContext} from 'react';
import {Container} from './styled';
import plus from '../../assets/plus.svg'
import {AddMaxsulotToggle} from '../../context/AddMaxsulot'

import search from '../../assets/search.svg'

const HeaderFilial = () => {
  const [Addtogle, setAddtogle] = useContext(AddMaxsulotToggle)

  return (
  <Container>
    <Container.Add>
    <Container.AddLogoCon onClick={()=>setAddtogle(true)}>
      <Container.AddLogo src={plus}/>
    </Container.AddLogoCon>

    <Container.AddTitle>
    Yangi filial
qo’shish
    </Container.AddTitle>
    </Container.Add>
    
    <Container.Input >
    </Container.Input>
<Container.InputImg src={search}/>

    

  </Container>)
};

export default HeaderFilial;
