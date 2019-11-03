import React from 'react';
import {
  useLocation,
} from 'react-router-dom';
import LayoutComponent from '../../components/layout';

interface LayoutProps {
  children?: React.ReactNode,
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const location = useLocation();
  const { children } = props;
  return (
    <LayoutComponent activeMenu={location.pathname}>
      {children}
    </LayoutComponent>
  );
};

export default Layout;
