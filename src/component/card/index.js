import React from 'react';
import {Container,Wrapper} from './styled'
import Ye from '../../assets/Path.svg'
import No from '../../assets/x.svg'
import Path from '../../assets/Path.png'
import Clock from '../../assets/clock.png'
import user from '../../assets/user.png'
import call from '../../assets/call.png'
import clipboard from '../../assets/clipboard.png'
import truck from '../../assets/truck.png'

const BuyurtmaCard = ({id,name,vaqt,tel,zakasSumma,dastavkaSumma,summa,operator,filial}) => {
  return <Container>
      <Container.Con1>
        <Wrapper>

      <Container.Number>{id}</Container.Number>
  <Container.Path>
<Container.Img src={Path} style={{background:'#fff',height:'16px',width:'16px'}}/>

  </Container.Path>

  </Wrapper>

  <Wrapper style={{margin:'50px 0 0 0'}}>

  <Container.Img src={Clock} style={{background:'#fff'}}/>

 

  <Container.T1 style={{margin:'0 0 0 20px'}}>{vaqt}</Container.T1>
  </Wrapper>


      </Container.Con1>

      <Container.Con2>
        <Wrapper>
  <Container.Img src={user} style={{background:'#fff'}}/>
  <Container.T1>
   {name}
</Container.T1>

        </Wrapper>
        <Wrapper style={{margin:'50px 0 0 0'}}>
  <Container.Img src={call} style={{background:'#fff'}}/>
  <Container.T1 style={{fontSize:'16px'}}>
  {tel}
</Container.T1>

        </Wrapper>
          
      </Container.Con2>

      <Container.Con3>

      <Wrapper>
  <Container.Img src={clipboard} style={{background:'#fff'}}/>
  <Container.T1> {zakasSumma} UZS
</Container.T1>

        </Wrapper>
        <Wrapper style={{margin:'20px 0 0 0'}}>
  <Container.Img src={truck} style={{background:'#fff'}}/>
  <Container.T1 style={{fontSize:'16px'}}>
 
</Container.T1>

<Container.T1 style={{fontSize:'16px'}}>
{dastavkaSumma} UZS
</Container.T1>
</Wrapper>

<Wrapper>
<Container.T2 style={{fontSize:'16px',margin:"20px 0 0 0"}}>
Umumiy summa
</Container.T2>
</Wrapper>

<Container.T1 B style={{fontSize:'16px',margin:"20px 0 0 0"}}>
{summa} UZS
</Container.T1>

      </Container.Con3>

      <Container.Con4>

      <Container.T2 style={{fontSize:'16px'}}>
      Operator:
</Container.T2>
<Container.T1 style={{fontSize:'16px',margin:"5px 0 0 0"}}>
{operator}
</Container.T1>

<Container.T2 style={{fontSize:'16px',margin:"30px 0 0 0"}}>
Filial:
</Container.T2>
<Container.T1 style={{fontSize:'16px',margin:"5px 0 0 0"}}>
{filial}
</Container.T1>

          



          
          <Container.BtnN>
    <Container.BtniconN src={No}/>
          </Container.BtnN>

          <Container.BtnY>
    <Container.BtniconY src={Ye}/>
          </Container.BtnY>
          
      </Container.Con4>

  </Container>;
};

export default BuyurtmaCard;
