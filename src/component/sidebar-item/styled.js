import styled from "styled-components";

export const Container = styled.div`
width:270px;
height:45px;
margin:0 130px 20px 0;
display: flex;
align-items:center;
justify-content:flex-start;
border-radius: 0px 6px 6px 0px;

`
Container.LogoCon =  styled.div`
width:36px;
height:36px;
background: #F6F6F6;
border-radius:6px;
display: flex;
align-items:center;
justify-content:center;
margin: 0 12px 0 0;
`
Container.Logo =  styled.img`
width:17px;
height:17px;
background: #F6F6F6;
`

Container.Title = styled.div`
font-size: 17px;
font-weight:600;
line-height: 18px;
background:${({Ac})=>Ac ? '#FCB600' :'#fff' };
color:${({Ac})=>Ac ? '#fff' :'#2D3A45' };

`


Container.W = styled.div`
display: flex;
width: 100%;
height: 100%;
align-items:center;
justify-content:flex-start;
padding:0 0 0 35px;
background:${({Ac})=>Ac ? '#FCB600' :'#fff' };
border-radius: 0px 6px 6px 0px;


`
