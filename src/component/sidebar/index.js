import React from 'react';
import { Container } from './styled';
import SidebarItem from '../sidebar-item/index';
import {SidebarData} from '../../utils'
import { Link,useLocation } from 'react-router-dom';
const Sidebar = () => {
  const Loc = useLocation()
  return <Container>
    <Container.LogoCon>
      <Container.LogoConImg/>

      <div style={{margin:'0 0 0 20px',background: '#fff'}}>
        <Container.LogoConT1>
          Fast Food
        </Container.LogoConT1>
        <Container.LogoConT2>
        Online maxsulot sotuvi
        </Container.LogoConT2>
      </div>
    </Container.LogoCon>
{
  SidebarData.map(({name,pathname,img})=>
  <Link to={pathname} style={{background:'#fff',textDecoration:'none'}}>
    <SidebarItem name={name} img={img} Ac={Loc.pathname === pathname}/>
    </Link>
  )
}
 
  </Container>;
};

export default Sidebar;
