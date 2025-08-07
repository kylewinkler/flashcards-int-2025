import { type ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
import { type ThemeType, useTheme } from './layout.context';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Body = styled.div<{$theme?: ThemeType}>`
  flex: 1;
  padding: 2rem 1rem;

  ${props => props.$theme === 'dark' && `
    background-color: #282c34;
    color: white;
  `}
`;

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { theme } = useTheme();

  return (
    <LayoutContainer>
      <Header />
      <Body $theme={theme}>
        {children}
      </Body>
      <Footer />
    </LayoutContainer>
  )
} 

export default Layout;