import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Wishlist() {
  const navigate=useNavigate()
  const productitem = useSelector((state) => state.wishlist)
  return (
    <div>
      {productitem.map((item) => {
        return <div key={item.id}>
          <div className='flex gap-3 border-4 border-green-600'>
            <div>
              <div>{item.title}</div>
              <div>
                <img width={"100px"} height={"50px"} src={item.image} alt="" />
              </div>
            </div>
            <div>
              {/* <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add to Bag</button> */}
            </div>
          </div>
        </div>
      })}
      <button onClick={()=>navigate("/")} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Home</button>
    </div>
  )
}

export default Wishlist
