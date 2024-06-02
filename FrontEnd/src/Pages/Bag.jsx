import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveBag } from "../Redux/Slicer/AddtoBag";
import { useNavigate } from "react-router-dom";

function Bag() {
  const navigate = useNavigate();
  const productall = useSelector((state) => state.AddtoBag.value);
  const dispatch = useDispatch();
  function removeHandler(id) {
    dispatch(RemoveBag(id));
  }
  const totalPrice=productall.reduce((total,item)=>total+item.price,0)
  return (
    <div>
      <div className="flex justify-around">
      <div className="flex flex-col gap-3 px-4 py-5">
        {productall.map((item) => {
          return (
            <div>
              <div key={item.id} className="p-3 border-2 border-green-600">
                <div className="flex">
                  <div>
                    <div>
                      <img
                        width={"100px"}
                        height={"50px"}
                        src={item.image}
                        alt=""
                      />
                    </div>
                    <div>₹{item.price}</div>
                    <div> {item.title}</div>
                  </div>
                  <div>
                    <button
                      onClick={() => removeHandler(item.id)}
                      type="button"
                      className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-3 px-4 py-5">
        <div>Total Count :- {productall.length}</div>
        <div>Total price :- {totalPrice}</div>
      </div>
      </div>

      {/* <button onClick={()=>navigate("/")} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Home</button> */}
    </div>
  );
}

export default Bag;
