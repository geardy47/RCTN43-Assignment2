import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  HomeOutlined,
  LineChartOutlined,
  BookOutlined,
  BranchesOutlined,
  BulbOutlined,
  TrophyOutlined,
} from '@ant-design/icons';
import Routes from './router/routes';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <div>
        <Layout style={{ minHeight: '100vh' }}>
          <BrowserRouter>
            <Sider
              collapsible
              collapsed={collapsed}
              onCollapse={this.onCollapse}
            >
              <div className='logo' />
              <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
                <Menu.Item key='1' icon={<HomeOutlined />}>
                  <Link to='/'>About Me</Link>
                </Menu.Item>
                <Menu.Item key='2' icon={<LineChartOutlined />}>
                  <Link to='/experiences'>Experiences</Link>
                </Menu.Item>
                <Menu.Item key='3' icon={<BookOutlined />}>
                  <Link to='/education'>Education</Link>
                </Menu.Item>
                <Menu.Item key='4' icon={<BranchesOutlined />}>
                  <Link to='/skills'>Skills</Link>
                </Menu.Item>
                <Menu.Item key='5' icon={<BulbOutlined />}>
                  <Link to='/interests'>Interests</Link>
                </Menu.Item>
                <Menu.Item key='6' icon={<TrophyOutlined />}>
                  <Link to='/awards'>Awards</Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Routes />
          </BrowserRouter>
        </Layout>
      </div>
    );
  }
}

// ReactDOM.render(<App />, mountNode);

export default App;
