import {Routes,Route} from 'react-router-dom';

import {Layout} from 'antd';
import {Link,useLocation} from 'react-router-dom';

//Import Pages
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <>
    <Layout>
      <Layout.Header style={{backgroundColor:"white"}}>
        <div style={{display:"flex",justifyContent:"space-between"}} >
        <Link to="/" style={{}}>Home</Link>
        <Link to="/cart" state={{message:"message from location"}}>Cart</Link>
        </div>
        
      
      </Layout.Header>
      <Layout.Content style={{padding:"5px"}}>
      
     
      

       <Layout.Content style={{padding:"10px",minHeight:"100%"}}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/cart" exact element={<Cart />} />
            <Route path="/product/:id" exact element={<ProductDetail />} />
            
          </Routes>
       </Layout.Content>
     

    <Layout.Footer>@copyright Mudit Mathur</Layout.Footer>

      </Layout.Content>
    </Layout>

    </>
  
  );
}

export default App;
