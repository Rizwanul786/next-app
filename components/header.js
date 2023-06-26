import React from 'react';
import Image from 'next/image';

export default function Header(props) {
    const toggleCollapsed=()=>{
        props.handlePress()
    }
        return (
            <div className="header">
                <div style={{marginLeft:"18px",marginTop:"8px",display:"flex"}}>
                    <Image style={{borderRadius:"50px"}} src='/logo.jpg' alt="img" width={34} height={34} />
                </div>
                <div className="manu_icon"
                     style={{ marginTop: 12,marginBottom:12,marginLeft:30}}
                >
                    <i onClick={toggleCollapsed} style={{color:"#001529",fontSize:"22px",cursor:"pointer"}} className="fas fa-bars" />
                </div>
            </div>
        )
}
