import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
        <NavButton onClick={() => navigate('/page-a')}>Page A</NavButton>
        <NavButton onClick={() => navigate('/page-b')}>Page B</NavButton>
      </NavContent>
    </Nav>
  )
}

export default Navbar;