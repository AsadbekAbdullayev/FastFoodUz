import React,{useState,useContext} from 'react';
import chiqit from '../../assets/ch.svg'
import ruchka from '../../assets/R.svg'
import block from '../../assets/block.svg'
import activ from '../../assets/activ.svg'
import { Container } from './styled';
import {XodimContext} from '../../context/xodimcontext'

const MijozCard = ({id,ism,tel,buyurtmaSoni,status}) => {
  const [active, setActive] = useState(null)
  const [midata, setMidata] = useContext(XodimContext)

  const ondelete =(id)=>{
    
    const ND = midata.filter((v)=>v.id !== id)
    setMidata(ND)

  }

  const edit = (id)=>{

    midata.map((v)=>
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
    const ND = midata.map((v)=>v.id === id ? active :v)
    setMidata(ND)
    setActive(null)
    
  }

  return <Container>
{
 active?.id === id ? <Container.Inp  value={active.ism} name={'ism'} onChange={(e)=>onChange(e)}/> :<Container.Title>{ism}</Container.Title>
}
{
 active?.id === id ? <Container.Inp  value={active.tel} name={'tel'} onChange={(e)=>onChange(e)}/> :<Container.Title>{tel}</Container.Title>
}{
 active?.id === id ? <Container.Inp  value={active.buyurtmaSoni} name={'buyurtmaSoni'} onChange={(e)=>onChange(e)}/> :<Container.Title>{buyurtmaSoni}</Container.Title>
}{
 active?.id === id ? <Container.Inp  value={active.status} name={'status'} onChange={(e)=>onChange(e)}/> :<Container.Title>{status}</Container.Title>
}
    

    <Container.ButtonCon>
    {
        active?.id === id ? <> <Container.Button><Container.Img1 onClick={()=>onSave(id)} src={activ} /></Container.Button> <Container.Button><Container.Img1  src={block} onClick={()=>setActive(null)}/></Container.Button> </> : <Container.Button><Container.Img1 src={ruchka} style={{width:'18px'}} onClick={()=>edit(id)} /></Container.Button>
    }
      <Container.Button>  <Container.Img1 src={chiqit} onClick={()=>ondelete(id)}/></Container.Button>
      

    </Container.ButtonCon>
  </Container>;
};

export default MijozCard;
