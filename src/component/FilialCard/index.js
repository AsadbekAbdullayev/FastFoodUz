import React,{useState,useContext} from 'react';
import chiqit from '../../assets/ch.svg'
import ruchka from '../../assets/R.svg'
import block from '../../assets/block.svg'
import chec from '../../assets/chec.svg'
import { Container } from './styled';
import {FilialContext} from '../../context/filialcontex'

const FilialCard = ({id,nomUz,nomRu,moljal,ishvaqti}) => {

  const [fildata, setFildata] = useContext(FilialContext)
  const [active, setActive] = useState(null)

  const ondelete =(id)=>{
    const ND = fildata.filter((v)=>v.id !== id)
    setFildata(ND)

  }
  const edit = (id)=>{

    fildata.map((v)=>
    v.id === id && setActive(v)

    )
    
  }
  const onChange = (e)=>{
    setActive({
      ...active,
        [e.name]:e.value
    }
    )
  }

  const onSave =(id)=>{
    const ND = fildata.map((v)=>v.id === id ? active :v)
    setFildata(ND)
    setActive(null)
    
  }

  return <Container>
{
 active?.id === id ? <Container.Inp  value={active.nomUz} name={'nomUz'} onChange={(e)=>onChange(e.target)}/> :<Container.Title>{nomUz}</Container.Title>
}
{
 active?.id === id ? <Container.Inp  value={active.nomRu} name={'nomRu'} onChange={(e)=>onChange(e.target)}/> :<Container.Title>{nomRu}</Container.Title>
}
{
 active?.id === id ? <Container.Inp  value={active.moljal} name={'moljal'} onChange={(e)=>onChange(e.target)}/> :<Container.Title>{moljal}</Container.Title>
}
{
 active?.id === id ? <Container.Inp  value={active.ishvaqti} name={'ishvaqti'} onChange={(e)=>onChange(e.target)}/> :<Container.Title>{ishvaqti}</Container.Title>
}



    <Container.ButtonCon>
{
  active?.id === id ? <> <Container.Button><Container.Img1 onClick={()=>onSave(id)} src={chec} /></Container.Button> <Container.Button><Container.Img1 onClick={()=>setActive(null)} src={block} /></Container.Button> </>: <Container.Button><Container.Img1 src={ruchka} style={{width:'18px'}} onClick={()=>edit(id)} /></Container.Button>
}
      
      
     
      <Container.Button><Container.Img1 src={chiqit} onClick={()=>ondelete(id)}/></Container.Button>

    </Container.ButtonCon>
  </Container>;
};

export default FilialCard;
