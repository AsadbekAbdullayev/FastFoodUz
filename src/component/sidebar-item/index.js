import React from 'react';
import {Container} from './styled'

const sidebarItem = ({name,Ac,img}) => {
  return <Container>
    <Container.W Ac={Ac} >

      <Container.LogoCon>
          <Container.Logo src={img}/>
      </Container.LogoCon>

      <Container.Title Ac={Ac} className={'titles'}>
      {name}
      </Container.Title>

    </Container.W>
      
     
  </Container>
};

export default sidebarItem;
