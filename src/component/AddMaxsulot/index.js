import React,{useState, useContext} from 'react';
import { Container,ButtonClose } from './styled';
import {AddMaxsulotToggle} from '../../context/AddMaxsulot';
import {MaxsulotContext} from '../../context/maxsulotcontext'
import Ye from '../../assets/Path.svg'
import No from '../../assets/x.svg'
import hotdog from '../../assets/hotdog.svg'


const AddMaxsulot = () => {
  const [Addtogle, setAddtogle] = useContext(AddMaxsulotToggle)
  const [maxdata, setMaxdata] = useContext(MaxsulotContext)

  const [Nd, setNd] = useState({
    id:0,
    nomi:'',
    narxi:'',
    qushimcha:'',
    img:hotdog
  })

 const onChange = (e)=>{
  setNd(
    {...Nd,
      id:maxdata.length,
      [e.target.name]:e.target.value
    }
  )
 }

 const onClose = ()=>{
  setNd(
    {...Nd,
      id:0,
    nomi:'',
    narxi:'',
    qushimcha:'',
    img:hotdog
    }
  )
  setAddtogle(false)
 }

 
const onSave =()=>{
  setMaxdata([
    ...maxdata,Nd
  ])
  onClose()
}
  return <div>
   <Container T={Addtogle}>
   <Container.Input placeholder="nomi" name={'nomi'} value={Nd.nomi} onChange={(e)=>onChange(e)}/>
      <Container.Input placeholder="narxi" name={'narxi'} value={Nd.narxi} onChange={(e)=>onChange(e)}/>
      <Container.Input placeholder="qushimcha" name={'qushimcha'} value={Nd.qushimcha} onChange={(e)=>onChange(e)}/>


      <div style={{display:'flex'}}>
      <Container.BtnY>  <Container.BtniconY src={Ye} onClick={onSave}/></Container.BtnY>
      <Container.BtnY>  <Container.BtniconY src={No} onClick={onClose}/></Container.BtnY>
      </div>
      
  </Container>
  <ButtonClose onClick={()=>setAddtogle(false)} T={Addtogle}>
      <ButtonClose.Title>+</ButtonClose.Title>
  </ButtonClose>
  </div>
  
};

export default AddMaxsulot;
