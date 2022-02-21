import styled from "styled-components";
 // add
export const Container = styled.div`
width:1050px;
height:80px;
background-color:#fff;
display: flex;
margin:0 0 0 2px;
`
Container.Add = styled.div`
width: 205px;
height: 80px;
background: #FFFFFF;
display: flex;
align-items:center;
justify-content:center;
border-right:2px solid #EDEFF3;
border-left:2px solid #EDEFF3;
box-sizing:border-box;
padding:12px 30px;
`
Container.AddLogoCon = styled.div`
width: 36px;
height: 36px;
background: #20D472;
border-radius: 18px;
display: flex;
align-items:center;
justify-content:center;
margin:0 14px 0 0;
`
Container.AddLogo = styled.img`
width: 14px;
height: 14px;
background: #20D472;
`

Container.AddTitle = styled.div`
width: 83px;
height: 32px;
font-family: sans-serif;
font-size: 11px;
line-height: 16px;
font-weight:760;
color: #2D3A45;
background: #FFFFFF;

`

// buyurtmalar
export const Buyurtma = styled.div`
width: 686px;
height: 80px;
background: #FFFFFF;
border-right:2px solid #EDEFF3;
display: flex;
align-items:center;
justify-content:center;
`
Buyurtma.BtnCon = styled.div`
width: 591px;
height: 48px;
background: #EDEFF3;
border-radius: 24px;
display: flex;
align-items:center;
justify-content:space-around;
`

Buyurtma.Btn = styled.div`
   width: 162px;
height: 36px;
font-family: sans-serif;
font-size: 14px;
line-height: 16px;
color: #2D3A45;
mix-blend-mode: normal;
opacity: 0.4;
display: flex;
align-items:center;
border-radius: 18px;
justify-content:center;
margin:6px;
background:#EDEFF3;
background: ${({P})=>P && '#FFF'};
box-shadow:${({P})=>P && ' 0px 2px 2px rgba(174, 176, 181, 0.314986)'};
color:${({P})=>P && '#000'};
opacity: ${({P})=>P && '1'};
`