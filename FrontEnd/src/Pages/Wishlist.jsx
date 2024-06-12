import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const navigate = useNavigate();
  const productitem = useSelector((state) => state.wishlist);
  return (
    <div>
      {productitem.length !== 0 ? (
        <div className="grid grid-cols-3 gap-4 h-[200px] p-5 w-[900px]">
          {productitem.map((item) => {
            return (
              <div
                key={item.id}
                className="flex gap-3 border-4 border-green-600 items-center justify-center h-[200px]"
              >
                <div className="flex flex-col items-center gap-3 ">
                  <div className="mb-2">{item.title}</div>
                  <div>
                    <img
                      width={"50px"}
                      height={"50px"}
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div>
                    <button
                      type="button"
                      class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      Add to Bag
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="flex flex-col gap-4 justify-center items-center ">
            Your WishList is Empty BOSS. Please Fill Something
            <button
              onClick={() => navigate("/")}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Wishlist;
