import React from 'react'
import Product from './Product'
import {Row,Col} from 'antd';
import ProductData from "../data/Products.json";
const ProductList = () => {
  return (
    <Row  justify="center" gutter={[16,16]} style={{padding:"30px"}} >
      

       {
           ProductData.map(p=>(
            <Col key={p.id}  sm={24} md={12} lg={6}>
            <Product data={p} />
            </Col>
           ))
       }
      
      
     
        
    
    </Row>
  )
}

export default ProductList