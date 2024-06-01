import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function ProductDetails({ cart, setCart}) {
    const {id} = useParams()
    const [product, setProduct] = useState({});
    const [relatedProducts , setRelatedProducts] = useState([]);

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
      // console.log("cart element " , cart)
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
   

    useEffect(() => {
        const filteredProduct = items.filter((p) => p.id == id)
        setProduct(filteredProduct[0]);
        const relatedProduct = items.filter((rel) => rel.category == product.category );
        //console.log(relatedProduct);
        setRelatedProducts(relatedProduct)
    }, [id, product.category])
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
    

   
    <div className='flex justify-center items-center' key={product.id}>
        <div className='h-[14rem] w-[14rem] my-[2rem] '>
            <img src={product.imgSrc} alt="img" />
        </div>

        <div className='pl-[2rem]'>
           <div>
                    <h2 className="pl-[3rem] text-bold text-[1.3rem] ">
                      {product.title}
                    </h2>
                  </div>
                  <div className=" text-[12px] px-2">
                    {product.description}
                  </div>
                  <div className="my-[-0.5rem]">
                    <button className="h-[2rem] w-[4rem] bg-green-700 text-white rounded rounded-sm m-4">
                      {product.price}
                    </button>
                    <button className="h-[2rem] w-[6rem] bg-blue-700 text-white rounded rounded-sm m-2"
                       onClick={() => addToCart(product.id, product.price, 
                        product.title, product.description, product.imgSrc)}
                    >
                      Add to Cart
                    </button>
                  </div>
          </div>
       </div>
       <div>
        <h1 className='text-bold text-[1.5rem] text-center'>Related Products</h1>
       </div>
       <Product cart={cart} setCart={setCart} items={relatedProducts} />
 
 </>
  )
}

export default ProductDetails