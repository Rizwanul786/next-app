import React from 'react';
import Image from 'next/image';

export default function Header(props) {
        return (
            <div className="header">
                <div className="row">
                <div className="col-lg-1"></div>
                    <div style={{marginTop:"8px"}}  className="col-lg-9 pl-2 col-sm-4 col-xm-4">
                        <h3>LIT-ADMIN</h3>
                    </div>
                    <div style={{marginTop:"15px"}} className="col-lg-2 col-sm-7 col-xm-7 text-center">
                        <span>Rizwanul Haque</span>
                    </div>
                </div>
            </div>
        )
}
