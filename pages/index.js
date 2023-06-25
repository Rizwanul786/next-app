import Layout from '../components/layout';
import withAuth from '../components/withAuth'
import React, { useState } from 'react'
import { Progress, Space } from 'antd';

const Home=()=>{
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
        <div className="row mt-2">
          {/* <div className="col-lg-4 col-xl-4 col-sm-12 text-center">
            <img width="200px" src={black_scooter} />
          </div> */}
          <div className="col-lg-8 col-xl-8 col-sm-12">
            <h4>New Electric Scooter Black Color</h4>
            <span>Features: Mobile Charger, Height Adjustable Seat, Telescopic Front Suspension System</span>

            <div className='row'>
              {feature_list.map((item, index) =>
                <div className='col-6'>
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
                  GT Force Electric scooter is a brain child of two great minds, who bring along with themselves extensive knowledge with decades of technical and industry expertise to integrate into one challenging force.
                                </p>
                <p style={{ fontSize: '12px', color: "gray" }}>
                  GT Force has been established with the goal of revolutionizing the electric scooter market in India. The organization aims to expose the Indian EV consumer to the unparalleled benefits and absolute pleasure of riding a real e-Scooter in comparison to the fuel-based vehicle.
                                </p>
                <p style={{ fontSize: '12px', color: "gray" }}>
                  The company has started its operations with manufacturing units in Manesar, Gurgaon, and has a manufacturing capacity of 5000 units per month.
                                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="row mt-2">
          {/* <div className="col-lg-4 col-xl-4 col-sm-12 text-center">
            <img width="200px" src={white_scooter} />
          </div> */}
          <div className="col-lg-8 col-xl-8 col-sm-12">
            <h4>New Electric Scooter White Color</h4>
            <span>Features: Mobile Charger, Height Adjustable Seat, Telescopic Front Suspension System</span>

            <div className='row'>
              {feature_list.map((item, index) =>
                <div className='col-6'>
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
                  GT Force Electric scooter is a brain child of two great minds, who bring along with themselves extensive knowledge with decades of technical and industry expertise to integrate into one challenging force.
                                </p>
                <p style={{ fontSize: '12px', color: "gray" }}>
                  GT Force has been established with the goal of revolutionizing the electric scooter market in India. The organization aims to expose the Indian EV consumer to the unparalleled benefits and absolute pleasure of riding a real e-Scooter in comparison to the fuel-based vehicle.
                                </p>
                <p style={{ fontSize: '12px', color: "gray" }}>
                  The company has started its operations with manufacturing units in Manesar, Gurgaon, and has a manufacturing capacity of 5000 units per month.
                                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-lg-4 col-xl-4 col-sm-12 text-center">
            <img width="200px" src={red_scooter} />
          </div> */}
          <div className="col-lg-8 col-xl-8 col-sm-12">
            <h4>New Electric Scooter Red Color</h4>

            <div className='row'>
              {feature_list.map((item, index) =>
                <div className='col-6'>
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
                  GT Force Electric scooter is a brain child of two great minds, who bring along with themselves extensive knowledge with decades of technical and industry expertise to integrate into one challenging force.
                                    </p>
                <p style={{ fontSize: '12px', color: "gray" }}>
                  GT Force has been established with the goal of revolutionizing the electric scooter market in India. The organization aims to expose the Indian EV consumer to the unparalleled benefits and absolute pleasure of riding a real e-Scooter in comparison to the fuel-based vehicle.
                                    </p>
                <p style={{ fontSize: '12px', color: "gray" }}>
                  The company has started its operations with manufacturing units in Manesar, Gurgaon, and has a manufacturing capacity of 5000 units per month.
                                    </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default withAuth(Home);