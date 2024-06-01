import React from "react";
///import { items } from "./Data";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function Product({items, cart, setCart}) {

  const addToCart = (id, price, title, description, imgSrc) => {
   // toast("Items added to cart")
    const obj = {
      id, 
      price,
       title,
        description,
         imgSrc
    }
   
    setCart([...cart, obj])
    console.log("cart element " , cart)
    toast.success('Item added on cart', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    
      });

   
  }

  return (
    <>
    <ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark" />
      <div >
        {items.map((singleProduct) => {
          
          return (
            <div key={singleProduct.id} className=" inline-block pl-[3.4rem] p-4">
              <div >
                <div
                  className="h-[19rem]  w-[16rem] border border-red-300 "
                  
                >
                  <Link to={`/product/${singleProduct.id} `}>
                    <img
                      src={singleProduct.imgSrc}
                      alt="img"
                      className="h-[10rem] pl-[2rem]  "
                    />
                  </Link>
                  <div>
                    <h2 className="pl-[3rem] text-bold ">
                      {singleProduct.title}
                    </h2>
                  </div>
                  <div className=" text-[12px] px-2">
                    {singleProduct.description}
                  </div>
                  <div className="my-[-0.5rem]">
                    <button className="h-[2rem] w-[4rem] bg-green-700 text-white rounded rounded-sm m-4">
                      {singleProduct.price}
                    </button>
                    <button className="h-[2rem] w-[6rem] bg-blue-700 text-white rounded rounded-sm m-2"
                    onClick={() => addToCart(singleProduct.id, singleProduct.price, 
                      singleProduct.title, singleProduct.description, singleProduct.imgSrc)}
                    >
                      Add to Cart
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Product;
