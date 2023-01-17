import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getRoutes } from "../../Api";
import {
  StyledNav,
  StyledNavContent,
  StyledLogoButton,
  StyledNavTittle,
  StyledNavButton,
  StyledNavButtonContainer,
  StyledNavTittleContainer,
} from './Navbar.styles';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = useLocation()
  const [tittle, setTittle] = useState('');
  const [menuList, setMenuList] = useState<Route[]>([]);

  const getMenuList = async () => {
    const menues: Route[] = await getRoutes();
    setMenuList(menues);
  };

  useEffect(() => {
    setTittle('Heng Transport Service');
    getMenuList();
  }, [pathname]);

  const buttonBack = () => {
    navigate('/');
  }

  return (
    <StyledNav>
      <StyledNavContent>
        <StyledNavTittleContainer>
          <StyledLogoButton onClick={buttonBack} />
          <StyledNavTittle>{tittle}</StyledNavTittle>
        </StyledNavTittleContainer>

        <StyledNavButtonContainer>
          {menuList.map((menu) => (
            <StyledNavButton
              active={location.pathname === menu.link}
              key={`menu-${menu.id}`}
              onClick={() => navigate(menu.link)}>{menu.name}
            </StyledNavButton>
          ))}
        </StyledNavButtonContainer>
      </StyledNavContent>
    </StyledNav>
  )
}

export default Navbar;