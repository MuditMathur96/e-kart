import { Button, Col, Row,Breadcrumb, Divider } from 'antd';
import React from 'react';
import {useLocation,Link} from 'react-router-dom';
import {addToCart} from '../utils/cart.util';

const ProductDetail = () => {
    const {state} = useLocation();
    console.log(state.data);
  return (
    <div style={{backgroundColor:"#f7f7f7",padding:"30px"}}>
        <Breadcrumb style={{padding:"10px"}}>
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item>{state?.data.name}</Breadcrumb.Item>
        </Breadcrumb>
        <Row gutter={[8,8]} justify="center"  >
            <Col span={12} md={12} xs={24} >

                    <img src={`/images/${state.data.image}`}
                    style={{width:"100%",maxWidth:400}}
                    alt={state?.data.name}  />
                    <Divider type="vertical" ></Divider>

            </Col>
            
            <Col span={12} md={12} xs={24}>
                <div>
                    <h2>{state?.data.name}</h2>
                    <p style={{color:"gray"}}>{state?.data.description}</p>
                    <Button onClick={()=>addToCart(state?.data)}>Add to cart</Button>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default ProductDetail