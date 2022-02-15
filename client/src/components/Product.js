import React from 'react';
import {Card} from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import {addToCart} from '../utils/cart.util';

const Product = ({data}) => {
 
  return (
    
    <Card
    hoverable
    style={{width:240,padding:"10px"}}
    cover={<img src={`./images/${data.image}`} alt="some black shoe" />}
    actions={[
         <ShoppingCartOutlined size={"30px"} key="Add to cart" onClick={()=>addToCart()}/>,
         <Link to={"/product/"+data.name} state={{data}}>More</Link>
    ]}>
        <Card.Meta 
        description={
            <div><p>{data.description}</p>
            <p style={{color:"black",fontWeight:"600",fontSize:"25px",marginBottom:0}}>
                Rs.{data.price}</p>
            </div>

        }
        title={data.name}
        
        ></Card.Meta>
    </Card>
    
  )
}

export default Product