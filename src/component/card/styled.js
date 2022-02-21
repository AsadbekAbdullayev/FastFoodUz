import styled from "styled-components";

export const Container = styled.div`
width: 904px;
height: 150px;
background: #FFFFFF;
box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
border-radius: 6px;
display:flex;
margin: 0 0 20px 0;
:hover{
    box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
}
`

export const Wrapper = styled.div`
display: flex;
background: #fff;
align-items:center;
justify-content:flex-start;
`

Container.Number = styled.div`
width: 90px;
height: 36px;
background: #20D472;
border-radius: 18px;
font-size: 20px;
line-height: 16px;
letter-spacing: 0.666667px;
color: #FFFFFF;
display:flex;
align-items:center;
justify-content:center;
`
Container.Path = styled.div`
width: 36px;
height: 36px;
background: #EDEFF3;
border-radius: 18px;
display:flex;
align-items:center;
justify-content:center;
margin:0 20px;
`
Container.Img = styled.img`
width: 20px;
height: 20px;
`
Container.T1 = styled.div`
font-size: 20px;
line-height: 20px;
letter-spacing: 0.666667px;
color: #2D3A45;
background: #fff;
font-weight:${({B})=> B && '900'};
`
Container.T2 = styled.div`
font-size: 11px;
line-height: 18px;
letter-spacing: 0.366667px;
background: #fff;
color: #8D9BA8;
`


Container.Con1 = styled.div`
width:178px;
height: 130px;
padding:20px 10px;
background: #fff;
border-right: 2px solid #EDEFF3;
border-radius: 6px 0 0 6px;
display:flex;
flex-direction:column;

`
Container.Con2 = styled.div`
padding:10px;
width: 248px;
height: 130px;
background: #FFFFFF;
border-right: 2px solid #EDEFF3;
display:flex;
flex-direction:column;
justify-content:center;

`
Container.Con3 = styled.div`
padding:10px 40px;
width: 247px;
height: 130px;
background: #FFFFFF;
border-right: 2px solid #EDEFF3;
display:flex;
flex-direction:column;
`
Container.Con4 = styled.div`
width: 247px;
padding:10px ;
height: 130px;
background: #FFFFFF;
border-radius:0 6px 6px 0;
display:flex;
align-items:flex-start;
flex-direction:column;
justify-content:center;
position: relative;

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
margin:5px 0;
position:absolute;
top:10px;
right: -25px;
:active{
    transform:scale(0.9);
}
`
Container.BtnN = styled.button`
width: 50px;
height: 50px;
background: #fff;
border-radius: 28px;
display:flex;
align-items:center;
justify-content:center;
border:5px solid #EDEFF3;
margin:5px 0;
position:absolute;
top:80px;
right: -25px;
:active{
    transform:scale(0.9);
}
`


Container.BtniconN = styled.img`
width: 15px;
height: 15px;
background: #fff;
`
Container.BtniconY = styled.img`
width: 20px;
height: 20px;
background: #fff;
`
