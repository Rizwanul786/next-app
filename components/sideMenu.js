import {
    BankOutlined,
    UsergroupAddOutlined,
    MailOutlined,
    HomeOutlined,
    LogoutOutlined,
  } from '@ant-design/icons';
  import { Button, Tooltip } from 'antd';
  import { useRouter } from 'next/router'
import { useState,useEffect } from 'react';
import Image from 'next/image';


const SideMenu = (props) => {
  const [current,setCurrent]=useState('1')
  const [items,setItems] = useState([
    {label:'HOME',path:"/", key:'1', icon:<HomeOutlined style={{fontSize:"22px",color:"white"}} />,active:true},
    {label:'USER DETAILS',path:"/user-details", key:'2', icon:<UsergroupAddOutlined style={{fontSize:"22px",color:"white"}} />,active:false},
    {label:'WITHDRAW REQ.',path:"/withdraw-requests", key:'3', icon:<BankOutlined style={{fontSize:"22px",color:"white"}}/>,active:false},
    {label:'CONTACT US',path:"/withdraw-req", key:'4', icon:<MailOutlined style={{fontSize:"22px",color:"white"}} />,active:false},
    {label:'LOGOUT', key:'?', icon:<LogoutOutlined style={{fontSize:"22px",color:"red"}}/>,active:false},
  ]);
    const router = useRouter()

    const handlePage=(index)=>{
      let menu=items.map(s1=>{
        s1.active=false
        return s1
      })
      let obj=menu[index];
      obj['active']=true;
      menu[index]=obj;
      setItems(menu)

      if(obj.key==="?"){
        localStorage.setItem('isAuthenticated',false)
        router.replace('/login')
      }else{
        router.replace(obj.path)
      }
    }
    useEffect(() => {
      let menu=items.map(s1=>{
        s1.active=false
        return s1
      })
      let index=menu.findIndex(s1=>s1.key===props.i)
      let obj=menu[index];
      obj['active']=true;
      menu[index]=obj;
      setItems(menu)
    },[props.i]);

    return (
      <div className="sidebar">
          <div style={{marginLeft:"24px",marginTop:"8px",display:"flex",marginBottom:"20px"}}>
              <Image style={{borderRadius:"50px"}} src='/logo.jpg' alt="img" width={50} height={50} />
          </div>
        {items.map((item,index)=>
        <div key={index}>
          <div style={item.active===true?{padding:"5px"}:{padding:"15px"}}>
            <Tooltip title={item.label}>
            <div onClick={()=>handlePage(index)} style={item.active===true?{padding:"18px",backgroundColor:"#628de0",color:"white",cursor:"pointer",borderRadius:"20%"}:{cursor:"pointer"}}>
              {item.icon}
            </div>
            </Tooltip>
          </div>
          </div>
        )}
      </div>
    );
  };
  export default SideMenu;