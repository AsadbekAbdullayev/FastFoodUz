import React,{useState,useContext} from 'react';
import chiqit from '../../assets/ch.svg'
import ruchka from '../../assets/R.svg'
import { Container } from './styled';
import {MaxsulotContext} from '../../context/maxsulotcontext'
import block from '../../assets/block.svg'
import chec from '../../assets/chec.svg'

const MaxsulotCard = ({id,nomi,narxi,qushimcha,img}) => {
  const [maxdata, setMaxdata] = useContext(MaxsulotContext)
  const [active, setActive] = useState(null)

  const ondelete =(id)=>{
    
    const ND = maxdata.filter((v)=>v.id !== id)
    setMaxdata(ND)

  }

  const edit = (id)=>{

    maxdata.map((v)=>
    v.id === id && setActive(v) 
    )
    
  }
  const onChange = (e)=>{
    setActive({
      ...active,
        [e.target.name]:e.target.value
    }
    )
  }

  
  const onSave =(id)=>{
    const ND = maxdata.map((v)=>v.id === id ? active :v)
    setMaxdata(ND)
    setActive(null)
    
  }

  return <Container>
<Container.Img src={img}/>

{
 active?.id === id ? <Container.Inp  value={active.nomi} name={'nomi'} onChange={(e)=>onChange(e)}/> :<Container.Title>{nomi}</Container.Title>
}

{
 active?.id === id ? <Container.Inp  value={active.narxi} name={'narxi'} onChange={(e)=>onChange(e)}/> :<Container.Title>{narxi}</Container.Title>
}
{
 active?.id === id ? <Container.Inp  value={active.qushimcha} name={'qushimcha'} onChange={(e)=>onChange(e)}/> :<Container.Title>{qushimcha}</Container.Title>
}

   

    <Container.ButtonCon>

    {
        active?.id === id ? <> <Container.Button><Container.Img1 onClick={()=>onSave(id)} src={chec} /></Container.Button> <Container.Button><Container.Img1  src={block} onClick={()=>setActive(null)}/></Container.Button> </> : <Container.Button><Container.Img1 src={ruchka} style={{width:'18px'}} onClick={()=>edit(id)} /></Container.Button>
    }
      <Container.Button>  <Container.Img1 src={chiqit} onClick={()=>ondelete(id)}/></Container.Button>

    </Container.ButtonCon>
  </Container>;
};

export default MaxsulotCard;
