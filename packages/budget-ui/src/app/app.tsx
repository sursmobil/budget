import styles from './app.module.scss';

import { Breadcrumb, Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => (
  <Layout className="layout">
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['home']}
        items={[{ label: 'Home', key: 'home' }]}
      />
    </Header>
    <Content className={styles['content']}>
      <Breadcrumb className={styles['breadcrumb']}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      <div className={styles['site-layout-content']}>Content</div>
    </Content>
    <Footer className={styles['footer']}>Karo & Szymo ©2022</Footer>
  </Layout>
);

export default App;
