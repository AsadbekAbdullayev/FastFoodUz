import React,{useContext, useState} from 'react';
import { Container,ButtonClose } from './style';
import {AddMaxsulotToggle} from '../../context/AddMaxsulot'
import Ye from '../../assets/Path.svg'
import No from '../../assets/x.svg'
import {FilialContext} from '../../context/filialcontex'

const AddFilial = () => {
  const [Addtogle, setAddtogle] = useContext(AddMaxsulotToggle)
  const [fildata, setFildata] = useContext(FilialContext)
  const [Nd, setNd] = useState({
    id:0,
    nomUz:'',
     nomRu:'',
     moljal:'',
     ishvaqti:''
  })

 const onChange = (e)=>{
  setNd(
    {...Nd,
      id:fildata.length,
      [e.target.name]:e.target.value
    }
  )
 }

 const onClose = ()=>{
  setNd(
    {...Nd,
      id:0,
    nomUz:'',
     nomRu:'',
     moljal:'',
     ishvaqti:'' 
    }
  )
  setAddtogle(false)
 }

const onSave =()=>{
  setFildata([
    ...fildata,Nd
  ])
  onClose()
}


  return <div>
   <Container T={Addtogle}>

   <Container.Input placeholder="FILIAL NOMI (UZ)" name={'nomUz'} value={Nd.nomUz} onChange={(e)=>onChange(e)}/>
      <Container.Input placeholder="FILIAL NOMI (RU)" name={'nomRu'} value={Nd.nomRu} onChange={(e)=>onChange(e)}/>
      <Container.Input placeholder="MO’LJAL" name={'moljal'} value={Nd.moljal} onChange={(e)=>onChange(e)}/>
      <Container.Input placeholder="ISH VAQTI" name={'ishvaqti'} value={Nd.ishvaqti} onChange={(e)=>onChange(e)}/>

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

export default AddFilial;
