import React, { useState } from 'react';
import Header from './header';
import SideManu from './sideMenu'

const Layout=({children,i})=> {
    return (
      <div>
        <Header/>
        <div style={{display:"flex",width:"100%"}}>
          <SideManu i={i}/>
          <main className="content" style={{marginTop:"42px",width:"100%"}}>
              {children}
          </main>
        </div>
      </div>
    );
  }
  export default Layout;