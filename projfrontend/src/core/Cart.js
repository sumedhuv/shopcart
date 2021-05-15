import React,{useState,useEffect} from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import {loadCart} from "./helper/cartHelper"

const Cart=()=> {
    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(false);
    useEffect(() => {
        setProducts(loadCart())
    }, [reload]);

    const loadAllProduct = () => {
        return (
            <div>
                <h2 className="text-white"> this section is to load products</h2>

                {products && products.map((product, index) => (
                    <Card
                        key={index}
                        product={product}
                        removeFromCart={true}
                        addtoCart={false}
                        setReload={setReload}
                        reload={reload}/>
                   
                ))}
            </div>
        )
    };
    const loadCheckout = () => {
        return (
            <div>
                <h2 className="text-white"> this section is for checkout</h2>
            </div>
        )
    };

  return (
    <Base title="Cart Page" description="Ready to Checkout">
     
        
        <div className="row text-center">
              <div className="col-6">{loadAllProduct()}</div>
              <div className="col-6">{loadCheckout()}</div>
        </div>
     
    </Base>
  );
}
export default Cart;