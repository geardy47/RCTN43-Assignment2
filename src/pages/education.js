import React, { Component } from 'react';
import '../App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Typography } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

export default class About extends Component {
  render() {
    return (
      <Layout className='site-layout'>
        <Header
          className='site-layout-background'
          style={{ paddingTop: 15, minHeight: 80 }}
        >
          <Title>Education</Title>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Profile</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className='site-layout-background'
            style={{ padding: 24, minHeight: 360 }}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a nisi
              quam. Sed placerat est at enim rhoncus, in malesuada lacus mollis.
              Pellentesque maximus sagittis libero consequat vehicula. Integer
              quam neque, consectetur eu arcu nec, maximus fringilla velit.
              Phasellus vitae nibh sem. In pretium pretium justo in rutrum.
              Etiam ipsum lacus, porta convallis lacinia vel, venenatis eget
              leo. Nunc ligula turpis, pellentesque hendrerit laoreet nec,
              condimentum vel quam. Nullam commodo molestie volutpat. Proin
              iaculis ex sit amet tristique congue. Praesent eu efficitur magna.
              Vivamus varius odio enim, nec sollicitudin mauris rhoncus porta.
              Cras et orci sit amet lorem eleifend viverra. Vivamus vitae magna
              id nibh eleifend faucibus sit amet non dui. Mauris eu ipsum
              vestibulum metus aliquet sollicitudin.
            </p>
            <p>
              Donec in orci nec nisl iaculis euismod sit amet a justo.
              Pellentesque et ligula ultrices, consequat tellus et, ornare
              neque. Fusce efficitur egestas tortor, in volutpat velit accumsan
              a. Proin id dictum neque. In porttitor leo vitae leo fringilla
              rutrum. In justo diam, placerat vel turpis ut, tincidunt accumsan
              mi. Cras tincidunt, mauris facilisis rutrum tincidunt, leo purus
              dictum leo, at posuere erat tortor ac orci. Donec dignissim
              pulvinar eleifend. Nam viverra eget libero sed tincidunt. Ut eget
              metus porta, tempus risus et, efficitur libero. Cras bibendum
              euismod tortor, interdum mollis risus fermentum nec. In tristique
              nulla libero, in consequat justo ullamcorper sed. Donec lacinia mi
              tincidunt sollicitudin semper. Duis consectetur gravida euismod.
              Maecenas ornare lectus nec faucibus pellentesque.
            </p>
            <p>
              Proin id quam at est feugiat laoreet eu sit amet sapien. Morbi
              porta sapien sed lorem elementum, a convallis risus laoreet.
              Integer nisi mauris, pretium in dui nec, tincidunt aliquam mauris.
              Vivamus suscipit massa in erat pretium, aliquet viverra nunc
              varius. Nunc tempor iaculis erat ac lobortis. Cras varius tellus
              vitae gravida convallis. Etiam convallis lectus felis, id blandit
              urna venenatis semper.
            </p>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Portfolio @ 2021 Created by Genta Shandi
        </Footer>
      </Layout>
    );
  }
}
