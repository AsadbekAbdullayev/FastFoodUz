import React,{useState, useContext} from 'react';
import { Container,ButtonClose } from './style';
import {AddMaxsulotToggle} from '../../context/AddMaxsulot'
import Ye from '../../assets/Path.svg'
import No from '../../assets/x.svg'
import {XodimContext} from '../../context/xodimcontext'



const AddMijoz = () => {
  const [Addtogle, setAddtogle] = useContext(AddMaxsulotToggle)
  const [mijozdata, setMijozdata] = useContext(XodimContext)

  const [Nd, setNd] = useState({
    id:0,
    ism:'',
    tel:'',
    buyurtmaSoni:'',
    status:''
  })

 const onChange = (e)=>{
  setNd(
    {...Nd,
      id:mijozdata.length,
      [e.target.name]:e.target.value
    }
  )
 }

 const onClose = ()=>{
  setNd(
    {...Nd,
      id:0,
      ism:'',
      tel:'',
      buyurtmaSoni:'',
      status:''
    }
  )
  setAddtogle(false)
 }

const onSave =()=>{
  setMijozdata([
    ...mijozdata,Nd
  ])
  onClose()
}





  return <div>
   <Container T={Addtogle}>
   <Container.Input placeholder="ism" name={'ism'} value={Nd.ism} onChange={(e)=>onChange(e)}/>
      <Container.Input placeholder="tel" name={'tel'} value={Nd.tel} onChange={(e)=>onChange(e)}/>
      <Container.Input placeholder="buyurtmaSoni" name={'buyurtmaSoni'} value={Nd.buyurtmaSoni} onChange={(e)=>onChange(e)}/>
      <Container.Input placeholder="status" name={'status'} value={Nd.status} onChange={(e)=>onChange(e)}/>

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

export default AddMijoz;
