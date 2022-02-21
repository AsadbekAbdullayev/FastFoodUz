import styled from "styled-components";

export const Container = styled.div`
position: fixed;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding: 20px;
width: 364px;
height: 572px;
left: 1400px;
top: 82px;
background: #FFFFFF;
box-shadow: 0px 20px 15px rgba(176, 177, 181, 0.551191);
z-index:10;
transform: ${({T})=>T && "translate(-400px,0px)"};
`
Container.Input = styled.input`
width: 300px;
height: 40px;
border-radius:5px;
padding: 5px;
background: #f1f1f1;
outline:none;
border: none;
margin: 0 0 10px 0;
`
Container.BtnY = styled.button`
width: 50px;
height: 50px;
background: #fff;
border-radius: 28px;
display:flex;
align-items:center;
justify-content:center;
border:5px solid #EDEFF3;
margin:15px 40px;
:hover{
border:5px solid rgba(243, 159, 4, 0.959);

}
:active{
    transform:scale(0.9);
}
`
Container.BtniconY = styled.img`
width: 20px;
height: 20px;
background: #fff;
`


export const ButtonClose = styled.div`

position: fixed;
width: 89px;
height: 50px;
left: 1375px;
transform: ${({T})=>T && "translate(-420px,0px)"};
top: 111px;
padding:15px;
background: #FFFFFF;
box-shadow: 0px 10px 20px rgba(176, 177, 181, 0.246941);
border-radius: 25px;
display: flex;
align-items:center;
justify-content:flex-start;

`
ButtonClose.Title = styled.div`
font-size: 35px;
font-weight:700;
letter-spacing: 0.666667px;
background: #fff;

color: #2D3A45;
transform: rotate(45deg);
:hover{
    transform: rotate(225deg);
    transition:all 0.7s
}

`