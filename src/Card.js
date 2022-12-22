export default function Card({product,addToCart,cartList})
{
return(
        <div className="col-lg-4 mb-3 mt-3">
            
              <div className="card" style={{ width:"18rem"}}>
                    <img 
                        src={product.image}
                        className="card-img-top"
                        alt="..."
                        height="250px"
                    />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">
                            Rs.{product.price}
                        </p>
                        <button disabled={cartList.some(ele =>ele.id === product.id)} className="btn btn-primary" onClick={() =>addToCart(product)} >
                            Add to Cart
                        </button>
                    </div>
                </div>
             
        </div>
);
}

