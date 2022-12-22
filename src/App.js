import logo from './logo.svg';
import "./App.css";
import Card from"./Card";
import Cart from"./Cart";
import {useState} from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App(){
    const products=[
      {
        id: 1,
        title:"iphone14",
        image:"https://www.aptronixindia.com/media/catalog/product/i/p/iphone_14_pro_max_deep_purple_pdp_image_position-1a_avail__en-in.jpg",
        price: 80000,
      },
      {
        id: 2,
        title:"laptops",
        image:"https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/15-3520/media-gallery/peripherals_latop_latitude_3520_gallery_3.psd?fmt=pjpg&pscan=auto&scl=1&wid=3339&hei=2291&qlt=100,1&resMode=sharp2&size=3339,2291&chrss=full&imwidth=5000",
        price: 60000,
      },
      {
        id: 3,
        title:"sony tv",
        image:"https://m.media-amazon.com/images/I/81sFUK4Sv0L._SL1500_.jpg",
        price: 110000,
      },
      {
        id: 4,
        title:"Titan smart-watch",
        image:"https://cdn1.smartprix.com/rx-iWZTRqXDg-w1200-h1200/WZTRqXDg.jpg",
        price: 50000,
      },
      {
        id: 5,
        title:"i-pad",
        image:"https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBpcGFkJTIwcHJvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        price: 60000,
      },
      {
        id: 6,
        title:"Headphones",
        image:"https://dzp3g6fzlnblr.cloudfront.net/wp-content/uploads/2022/08/Hesh-ANC_True-Black_S6HHW-N740_Hero_v001.jpg",
        price: 3000,
      },
    ];
    const [cartList,setList]=useState([])
    const [total,setTotal]=useState(0)

    let addToCart =(product) =>{
      setList([...cartList,{...product, quantity : 1}]);
      setTotal(total + product.price)
    };

    let removeCart =(product) => {
      let itemIndex= cartList.findIndex(item => product.id=== item.id)
      cartList.splice(itemIndex,1)
      setList([...cartList])
      setTotal(total - (product.price * product.quantity))
    };
    const incQuantity = (cartItem) =>{
      let itemIndex= cartList.findIndex(item => cartItem.id=== item.id)
      cartList[itemIndex].quantity=cartList[itemIndex].quantity + 1
      setList([...cartList])
      setTotal(total+ cartItem.price)
    }

    const decQuantity = (cartItem) =>{
      let itemIndex= cartList.findIndex(item => cartItem.id=== item.id)
      cartList[itemIndex].quantity=cartList[itemIndex].quantity - 1
      setList([...cartList])
      setTotal(total - cartItem.price)
    }
return (
    
    <div className="container">
      <div className="row">
      <div>
      <h1 style={{textAlign:"center",color:"blue"}}> Shopping Mart </h1>
      </div>
       <div className="col-lg-9">
          <div className="row">
           {products.map((list) => {
                return <Card product={list} 
                addToCart={addToCart} cartList={cartList}/>;
            })
           }
          </div>
       </div>
       <div className="col-lg-3 mt-3">
          <h3>CART </h3>
          <Cart cartList={cartList} removeCart={removeCart} incQuantity={incQuantity} decQuantity={decQuantity}/>
          <h3>TOTAL:{total}</h3>
        </div>
      </div>
    </div>
);
}

export default App;  
