export default function Cart({cartList,removeCart,incQuantity,decQuantity}){
return(
  <ol className="list-group list-group-numbered">
    {cartList.map((item) => {
      return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">{item.title} </div>
              {item.price} - {item.quantity}
              <button onClick={()=> incQuantity(item)}>+</button>
              <button onClick={() => decQuantity(item)}>-</button>
          </div>
          <button className="badge bg-primary rounded-pill" onClick={() => removeCart(item)}>X</button>
        </li>          
      );
    }) }
  </ol>
);
}