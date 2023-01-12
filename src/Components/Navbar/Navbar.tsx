import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getRoutes } from "../../Api";
import {
  Nav,
  NavContent,
  LogoButton,
  NavTittle,
  NavButton,
} from './Navbar.styles';

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation()
  const [tittle, setTittle] = useState('');
  const [menuList, setMenuList] = useState<Route[]>([]);

  const getMenuList = async () => {
    const menues: Route[] = await getRoutes();
    console.log(menues);
    setMenuList(menues);
  };

  useEffect(() => {
    setTittle('Haeng Transport Service');
    getMenuList();
  }, [pathname]);

  const buttonBack = () => {
    navigate('/');
  }

  return (
    <Nav>
      <NavContent>
        <LogoButton onClick={buttonBack} />
        <NavTittle>{tittle}</NavTittle>
        {menuList.map((menu) => (
          <NavButton key={`menu-${menu.id}`} onClick={() => navigate(menu.link)}>{menu.name}</NavButton>
        ))}
      </NavContent>
    </Nav>
  )
}

export default Navbar;