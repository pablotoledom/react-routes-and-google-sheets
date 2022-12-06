import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Nav, NavContent, LogoButton, NavTittle } from './Navbar.styles';

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation()
  const [titulo, setTitulo] = useState('');

  useEffect(() => {
    setTitulo('Test navigation site');
  }, [pathname]);

  const buttonBack = () => {
    navigate('/');
  }

  return (
    <Nav>
      <NavContent>
        <LogoButton onClick={buttonBack}>The Retro<br />Center</LogoButton>
        <NavTittle>{titulo}</NavTittle>
      </NavContent>
    </Nav>
  )
}

export default Navbar;