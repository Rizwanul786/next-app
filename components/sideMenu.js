import {
    ContainerOutlined,
    BulbOutlined,
    MailOutlined,
    HomeOutlined,
    LogoutOutlined,
  } from '@ant-design/icons';
  import { Button, Menu } from 'antd';
  import { useRouter } from 'next/router'

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
    getItem('HOME', '/', <HomeOutlined />),
    getItem('ABOUT', '/about', <BulbOutlined />),
    getItem('PRODUCTS', '/products', <BulbOutlined />),
    getItem('CONTACT US', '/contact', <MailOutlined />),
    getItem('CAREER', '/career', <ContainerOutlined />),
    getItem('LOGOUT', '?', <LogoutOutlined />),
  ];
  
  
  const SideMenu = (props) => {
    const router = useRouter()
    const handleClick=(value)=>{
      if(value.key==="?"){
        localStorage.setItem('isAuthenticated',false)
        router.replace('/login')
      }else{
        router.replace(value.key)
      }
    }
    return (
      <div className="sidebar">
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          inlineCollapsed={props.collapsed}
          items={items}
          onClick={handleClick}
          style={props.collapsed?{height:"100%"}:{boxShadow:"0 1px 4px -1px rgb(0 0 0 / 15%)",color:"black",height:"100vh",opacity:2}}
        />
      </div>
    );
  };
  export default SideMenu;