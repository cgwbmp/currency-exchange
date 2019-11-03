import React from 'react';
import {
  Link,
} from 'react-router-dom';
import { Layout as AntdLayout, Typography, Menu } from 'antd';
import './index.css';

const { Header, Content } = AntdLayout;
const { Title } = Typography;

interface LayoutProps {
  activeMenu?: string,
  children?: React.ReactNode,
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { activeMenu, children } = props;
  return (
    <AntdLayout>
      <Header>
        <Title level={2}>
          Currency
        </Title>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={activeMenu ? [activeMenu] : undefined}
        >
          <Menu.Item key="/exchange">
            <Link to="/exchange">
              Exchange
            </Link>
          </Menu.Item>
          <Menu.Item key="/rate">
            <Link to="/rate">
              Rate
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        {children}
      </Content>
    </AntdLayout>
  );
};

export default Layout;
