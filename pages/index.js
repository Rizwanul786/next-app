import Layout from '../components/layout';
import withAuth from '../components/withAuth'
import React, { useState } from 'react'
import { Progress, Space } from 'antd';

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
  const [feature_list, setfeature_list] = useState([
    { 'feature': 'Highly Insulated BLDC Motor' },
    { 'feature': 'Battery life' },
    { 'feature': 'Build Motor quality' },
    { 'feature': 'Controls and functionality' },
    { 'feature': 'Customer support' },
    { 'feature': '55-60* Lead/60-65*Lithium' }
  ])

  return (
    <Layout>
      <div className="container">

        {data.map((prod,index)=><div key={index} className="row mt-2">
          {/* <div className="col-lg-4 col-xl-4 col-sm-12 text-center">
            <img width="200px" src={black_scooter} />
          </div> */}
          <div className="col-lg-8 col-xl-8 col-sm-12">
            <h4>{prod.name}</h4>
            <span>Features: {prod.feature}</span>

            <div className='row'>
              {feature_list.map((item, index) =>
                <div key={index} className='col-6'>
                  <div className='row mt-2'>
                    <div className='col-7'>
                      <span style={{ paddingBottom: '5px', marginTop: '1.5rem', fontSize: '16px', color: "black" }}>{item.feature}</span>
                      <div style={{ borderBottom: 'solid 1px #ededed', marginTop: '11px' }}></div>
                    </div>
                    <div className='col-4'>
                      <Progress width={45} strokeLinecap="square" type="circle" percent={75} />
                    </div>
                  </div>
                </div>)}
            </div>
            <br />
            <div className="row">
              <div className="col-10">
                <p style={{ fontSize: '12px', color: "gray" }}>
                  {prod.description}
                </p>
              </div>
            </div>

          </div>
        </div>)}
      </div>
    </Layout>
  )
}

export default withAuth(Home);