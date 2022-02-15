const getCart=()=>{

    try{
        let cart =JSON.parse(localStorage.getItem("cart"));
        if(cart) return cart;
        return [];
    }
    catch{
        return [];
    }
    
}

const setCart=(cart)=>
{
    console.log("Cart: ",cart);
    localStorage.setItem('cart',JSON.stringify(cart));
}

const addToCart =(product)=>{

    let cart =getCart();
    //search product
    let indexOfProduct =cart.findIndex(item=>{
        console.log("item",item.id)
        return item.id===product.id;
    });
    console.log(product.id);
    console.log("index: ",indexOfProduct);
    //change qty if exists
    if(indexOfProduct!==-1)
    {
        cart[indexOfProduct].qty+=1;
    }

    else{
        // else add to cart
        product.qty=1;
        cart.push(product);
    }

    //set cart
    setCart(cart);
}


const removeFromCart =(product)=>{

    let cart =getCart();
    //search product
    let indexOfProduct =cart.indexOf(item=>item.id===product.id);
    //change qty if exists
    if(indexOfProduct!==-1)
    {
        return;
    }

    else{
        // else remove from cart

        cart[indexOfProduct].qty-=1;
        if(cart[indexOfProduct].qty && cart[indexOfProduct].qty<=0)
        {
            cart = cart.filter(p=>p.id!==product.id);
        }
    }

    //set cart
    setCart(cart);
}


module.exports ={getCart,setCart,addToCart,removeFromCart}