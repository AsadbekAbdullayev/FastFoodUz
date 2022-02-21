import React,{useContext} from 'react';
import {Container,Buyurtma} from './styled';
import plus from '../../assets/plus.svg'
import {AddMaxsulotToggle} from '../../context/AddMaxsulot'

const HeaderMaxsulot = () => {
  const [Addtogle, setAddtogle] = useContext(AddMaxsulotToggle)

const setAdd =()=>{
  setAddtogle(true)
}
  return (
  <Container>
    <Container.Add>
    <Container.AddLogoCon onClick={setAdd}>
      <Container.AddLogo src={plus}/>
    </Container.AddLogoCon>

    <Container.AddTitle>
    Yangi maxsulot
qo’shish
    </Container.AddTitle>
    </Container.Add>



  </Container>)
};

export default HeaderMaxsulot;
