import Layout from '../../components/layout'
import withAuth from '../../components/withAuth'
import React, { useState } from 'react'
import { Progress, Table,Card } from 'antd';
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

const User_Details=({data})=>{
    const dataSource = [
        {
          userID:'Mike121',
          name: 'Mike',
          email:'user121@gmail.com',
          age: 32,
          address: '10 Downing Street',
        },
        {
          userID: 'John123',
          name: 'John',
          email:'user121@gmail.com',
          age: 42,
          address: '10 Downing Street',
        },
        {
            userID:'Mike121',
            name: 'Mike',
            email:'user121@gmail.com',
            age: 32,
            address: '10 Downing Street',
          },
          {
            userID: 'John123',
            name: 'John',
            email:'user121@gmail.com',
            age: 42,
            address: '10 Downing Street',
          },
          {
            userID:'Mike121',
            name: 'Mike',
            email:'user121@gmail.com',
            age: 32,
            address: '10 Downing Street',
          },
          {
            userID: 'John123',
            name: 'John',
            email:'user121@gmail.com',
            age: 42,
            address: '10 Downing Street',
          },
          {
            userID:'Mike121',
            name: 'Mike',
            email:'user121@gmail.com',
            age: 32,
            address: '10 Downing Street',
          },
          {
            userID: 'John123',
            name: 'John',
            email:'user121@gmail.com',
            age: 42,
            address: '10 Downing Street',
          },
          {
            userID:'Mike121',
            name: 'Mike',
            email:'user121@gmail.com',
            age: 32,
            address: '10 Downing Street',
          },
          {
            userID: 'John123',
            name: 'John',
            email:'user121@gmail.com',
            age: 42,
            address: '10 Downing Street',
          },
          {
              userID:'Mike121',
              name: 'Mike',
              email:'user121@gmail.com',
              age: 32,
              address: '10 Downing Street',
            },
            {
              userID: 'John123',
              name: 'John',
              email:'user121@gmail.com',
              age: 42,
              address: '10 Downing Street',
            },
            {
              userID:'Mike121',
              name: 'Mike',
              email:'user121@gmail.com',
              age: 32,
              address: '10 Downing Street',
            },
            {
              userID: 'John123',
              name: 'John',
              email:'user121@gmail.com',
              age: 42,
              address: '10 Downing Street',
            },
            {
              userID:'Mike121',
              name: 'Mike',
              email:'user121@gmail.com',
              age: 32,
              address: '10 Downing Street',
            },
            {
              userID: 'John123',
              name: 'John',
              email:'user121@gmail.com',
              age: 42,
              address: '10 Downing Street',
            },
      ];
      
      const columns = [
        {
            title: 'UserID',
            dataIndex: 'userID',
            key: 'user_id',
          },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
          },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        
      ];
      
  return (
    <Layout i="2">
      <div style={{height:"93vh",paddingLeft:"25px"}} className="container">
          <div style={{marginTop:"25px"}}>
            <h5 style={{color:"white"}}>User Details</h5>
            <Table 
            dataSource={dataSource}
             columns={columns}
             pagination={{
                current: 1,
                total: 16,
                pageSize: 8,
                showSizeChanger: true,
                // onShowSizeChange:async (page,perPage)=>{
                //  await this.setState({perPage:perPage})
                //  await this.getData()
                // }
              }}
              />
          </div>
      </div>
    </Layout>
  )
}

export default withAuth(User_Details);