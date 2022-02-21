import styled from "styled-components";
import bitman from '../../assets/Bitmap.jpg'
export const Container = styled.div`
width: 300px;
height: 650px;
background: #FFF;
display:flex;
flex-direction:column; 
justify-content:flex-start;
`
Container.LogoCon = styled.div`
display:flex;
width: 220px;
height: 70px;
margin:28px 25px 60px 25px;
align-items:center;
background-color: #fff;
`


Container.LogoConImg = styled.div`
width: 70px;
height: 70px;
background: url(${bitman});
border-radius:50%;
`
Container.LogoConT1 = styled.div`
font-size: 20px;
font-weight:800;
line-height: 19px;
color: #2D3A45;
margin:0 0 7px 0;
background-color: #fff;

`

Container.LogoConT2 = styled.div`
font-size: 12px;
line-height: 14px;
text-align: center;
color: #2D3A45;
mix-blend-mode: normal;
opacity: 0.5;
background-color: #fff;

`
