import React from 'react'
import { Link } from 'react-router-dom';
function Cart({cart, setCart}) {
  return (
   
    <>
    <div>
    {
              cart.length==0 ? (
                <>
                <div className='text-center my-5 '>
                  <h1 className='text-[1.4rem] text-bold'>Your Cart is Empty</h1>

                <div className='h-[2rem] w-[12rem] bg-[#3498db] text-white text-bold flex justify-center items-center rounded rounded-sm mx-[43%] my-4'>
                <Link   to={'/'} >Continue Shopping...</Link>
                </div>
                 
                </div>
                </>
              ) :
      
      cart.map((product) => {
        return (
          <>
           <div key={product.id} className=" inline-block pl-[3.4rem] p-4">
         
              <div >
                <div
                  className="h-[19rem]  w-[16rem] border border-red-300 "
                  
                >
                  <Link to={`/product/${product.id} `}>
                    <img
                      src={product.imgSrc}
                      alt="img"
                      className="h-[10rem] pl-[2rem]  "
                    />
                  </Link>
                  <div>
                    <h2 className="pl-[3rem] text-bold ">
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
                   
                    >
                      Buy Now
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      })
    }
   
    </div>
    
   {
    cart.length!=0 && (
      <div className='flex justify-center items-center  '>
      <button className='h-[2rem] w-[8rem] bg-[#3498db] text-white text-bold rounded rounded-sm m-2'>Check Out</button>
      <button onClick={()=> setCart("")} className='h-[2rem] w-[8rem] bg-[#d35400] text-white text-bold  rounded rounded-sm'>Clear Cart</button>

    </div>
    )
   }
    </>
  )
}

export default Cart