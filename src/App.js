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
        title:"iphone",
        image:"https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-2.jpg",
        price: 40000,
      },
      {
        id: 2,
        title:"loptop",
        image:"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61Dw5Z8LzJL._SX679_.jpg",
        price: 50000,
      },
      {
        id: 3,
        title:"mac",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfL_yj3EJyQ41oWNCenqX8sPpSLmv7c1uO5d1MnMG8fDI5e9ajt13yOsbAbY0gnRPi3Gg&usqp=CAU",
        price: 75000,
      },
      {
        id: 4,
        title:"watch",
        image:"https://img.freepik.com/free-psd/mockup-three-smart-watches_125540-1663.jpg?w=2000",
        price: 5000,
      },
      {
        id: 5,
        title:"ipad",
        image:"https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBpcGFkJTIwcHJvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        price: 6000,
      },
      {
        id: 6,
        title:"earphone",
        image:"https://us.123rf.com/450wm/sabelskaya/sabelskaya1911/sabelskaya191100384/sabelskaya191100384.jpg?ver=6",
        price: 1500,
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
      <h1 style={{textAlign:"center",color:"red"}}> Happy Shooping </h1>
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