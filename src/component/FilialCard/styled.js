import styled from "styled-components";

export const Container = styled.div`
width: 992px;
height: 70px;

background: #FFFFFF;
border-radius: 6px;
display: flex;
align-items:center;
justify-content:space-between;
margin:10px 30px;
padding:10px 40px; 
:hover{
box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);

}
`
Container.Title = styled.div`
font-size: 17px;
color: #2D3A45;
background: #FFFFFF;
`

Container.Inp = styled.input`
padding:10px;
width: 150px;
height: 30px;
border-radius:10px;
border:1px solid #2D3A45;
background: #FFFFFF;
`

Container.Img1 = styled.img`
width: 27px;
height: 27px;
border-radius:50%;
background: #fff;
`
Container.ButtonCon = styled.div`
width: 150px;
height: 50px;
display: flex;
align-items:center;
background: #fff;
justify-content:space-between;
`
Container.Button = styled.button`
width: 40px;
height: 40px;
border: 4px solid #F1F1F1;
display: flex;
align-items:center;
background: #fff;
justify-content:center;
border-radius:50%;
:hover{
border: 4px solid #FCB600;

}
`

