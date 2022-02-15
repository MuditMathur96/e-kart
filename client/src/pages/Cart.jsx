import { Button, Col, Row,Breadcrumb, Table } from 'antd';
import React from 'react';
import {useLocation,Link} from 'react-router-dom';
import {getCart} from '../utils/cart.util';

const Cart = () => {
    const location = useLocation();
    const columns=[
        {
            title:"Name",
            dataIndex:"name",
            key:"name"
        },
        {
            title:"Qty",
            dataIndex:"qty",
            key:"qty"
        }
    ]
    
  return (
    <div style={{minHeight:"100%",backgroundColor:"#f7f7f7",padding:"30px"}}>
        
    <Breadcrumb style={{padding:"10px"}}>
        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item>cart</Breadcrumb.Item>
    </Breadcrumb>
    <Row gutter={[16,16]} justify="center"  >
        <Col span={12} md={12} xs={24}>

              
        </Col>
        <Col span={12} md={12} xs={24}>
            <div>
               
            </div>
        </Col>
    </Row>
    <Row gutter={[16,16]}>
        <Col  lg={12} sm={24} xs={24}>
            <Table columns={columns} dataSource={getCart()} />
        </Col>

        <Col  lg={12}  sm={24} xs={24}>
            <div >
                <p></p>
            </div>
        </Col>
    </Row>


</div>
  )
}

export default Cart