import Layout from '../components/layout';
import withAuth from '../components/withAuth'
import React, { useState } from 'react'
import { Progress, Space,Card } from 'antd';
import Image from "next/image";
import Link from "next/link";

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/get_all_products')
  let json_data=await res.json()
  return {
    props: {
      data:json_data.data
    },
  };
}

const Home=({data})=>{

  return (
    <Layout i="1">
      <div style={{height:"93vh"}} className="container">
        <div style={{textAlign:"center"}}>
          <header className="topbar">
              <div style={{paddingTop:"150px"}}>
                  <Image
                    src="/lit.svg"
                    height={82}
                    width={177}
                    alt=""
                  />
              </div>
          </header>
          <section className="home-hero-sec">
            <div className="container">
              <div className="row hero-row">
                <div className="col-12">
                  <h1 className="text-light">
                    Let's get <span className="logo-text">LIT!</span>{" "}
                  </h1>
                  <div className="text-light">
                    A platform with real profits and notional capital
                  </div>
                </div>
              </div>
            </div>
            <div className="gradient-circle1"></div>
            <div className="gradient-circle2"></div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default withAuth(Home);