import styled from 'styled-components';
import { useTheme } from './layout.context';
import Switch from "react-switch";
import { routes } from '../router/routes';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.div`
  padding: 0.5rem 1rem;
  background-color: #edeeef;
  color: #282c34;
  text-align: center;
  display: flex;
  justify-content: space-between;
`;

const RouteContainer = styled.div`
  display: flex;
  
  :not(:last-child) {
    margin-right: 1rem;
  }
`;

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: #282c34;
`;

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <HeaderWrapper>
      <RouteContainer>
        {routes.map((route, i) => <HeaderLink to={route.path} key={i}>{route.label}</HeaderLink>)}
      </RouteContainer>
      <Switch onChange={toggleTheme} checked={theme === 'dark'} onColor='#282c34' />
    </HeaderWrapper>
  )
}

export default Header;