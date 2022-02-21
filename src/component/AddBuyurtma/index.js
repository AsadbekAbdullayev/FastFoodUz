import React,{useContext} from 'react';
import { Container,ButtonClose } from './style';
import {AddMaxsulotToggle} from '../../context/AddMaxsulot'
import Ye from '../../assets/Path.svg'
import No from '../../assets/x.svg'
const AddBuyurtma = () => {
  const [Addtogle, setAddtogle] = useContext(AddMaxsulotToggle)
 
  return <div>
   <Container T={Addtogle}>
  

      <Container.Input placeholder="Name"/>
      <Container.Input placeholder="Tel"/>

      <div style={{display:'flex'}}>
      <Container.BtnY>  <Container.BtniconY src={Ye}/></Container.BtnY>
      <Container.BtnY>  <Container.BtniconY src={No}/></Container.BtnY>
      </div>
  </Container>
  <ButtonClose onClick={()=>setAddtogle(false)} T={Addtogle}>
      <ButtonClose.Title>+</ButtonClose.Title>
  </ButtonClose>
  </div>
  
};

export default AddBuyurtma;
