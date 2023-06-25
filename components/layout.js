import React, { useState } from 'react';
import Header from './header';
import SideManu from './sideMenu'

const Layout=({children})=> {
    const [collapsed,setCollapsed]=useState(true)

  const handlePress=()=>{
    if(collapsed===true){
      setCollapsed(false)
    }else{
      setCollapsed(true)
    }
  }
    return (
      <div>
        <Header collapsed={collapsed} handlePress={handlePress}/>
        <div style={{display:"flex",width:"100%"}}>
          <SideManu collapsed={collapsed}/>
          <main style={collapsed?{marginTop:"50px",width:"100%"}:{marginLeft:"230px",marginTop:"50px",width:"100%"}}>
              {children}
          </main>
        </div>
      </div>
    );
  }
  export default Layout;