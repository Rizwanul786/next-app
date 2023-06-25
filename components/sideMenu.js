import {
    ContainerOutlined,
    BulbOutlined,
    MailOutlined,
    HomeOutlined,
    LogoutOutlined,
  } from '@ant-design/icons';
  import { Button, Menu } from 'antd';

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('HOME', '1', <HomeOutlined />),
    getItem('PRODUCTS', '2', <BulbOutlined />),
    getItem('CONTACT US', '4', <MailOutlined />),
    getItem('CAREER', '3', <ContainerOutlined />),
    getItem('LOGOUT', '5', <LogoutOutlined />),
  ];
  const SideMenu = (props) => {
    return (
      <div className="sidebar">
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          inlineCollapsed={props.collapsed}
          items={items}
          style={props.collapsed?{height:"100%"}:{boxShadow:"0 1px 4px -1px rgb(0 0 0 / 15%)",color:"black",height:"100vh",opacity:2}}
        />
      </div>
    );
  };
  export default SideMenu;