import React,{useContext} from 'react';
import {Container,Buyurtma} from './styled';
import plus from '../../assets/plus.svg'
import {AddMaxsulotToggle} from '../../context/AddMaxsulot'
import { CategoryB } from '../../context/categoryB';

const Header = () => {
  const [Addtogle, setAddtogle] = useContext(AddMaxsulotToggle)
  const [cat, setCat] = useContext(CategoryB)

  return (
  <Container>
    <Container.Add>
    <Container.AddLogoCon onClick={()=>setAddtogle(true)}>
      <Container.AddLogo src={plus}/>
    </Container.AddLogoCon>

    <Container.AddTitle>
    Yangi buyurtma
qo’shish
    </Container.AddTitle>
    </Container.Add>


    <Buyurtma>
        <Buyurtma.BtnCon>
          <Buyurtma.Btn P={cat==='Yangi'} onClick={()=>setCat('Yangi')} >
            Yangi
          </Buyurtma.Btn>

          <Buyurtma.Btn P={cat==='Qabul qilingan'} onClick={()=>setCat('Qabul qilingan')} >
            Qabul qilingan
            </Buyurtma.Btn>

            <Buyurtma.Btn P={cat==='Jo`natilgan'} onClick={()=>setCat('Jo`natilgan')} >
            Jo`natilgan
            </Buyurtma.Btn>

            <Buyurtma.Btn P={cat==='Yopilgan'} onClick={()=>setCat('Yopilgan')} >
            Yopilgan
            </Buyurtma.Btn>
        </Buyurtma.BtnCon>
    </Buyurtma>

  </Container>)
};

export default Header;
