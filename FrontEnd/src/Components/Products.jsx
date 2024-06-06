import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AddBag } from "../Redux/Slicer/AddtoBag";
import { Addwishlist } from "../Redux/Slicer/WishlistSlice";
import Spinner from "./Spinner";

function Product() {
  const [productitem, setProductItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    productlist();
  }, []);

  async function productlist() {
    setLoading(true);
    const res = await axios.get("https://fakestoreapi.com/products");
    setProductItem(res.data);
    setLoading(false);
  }
  function addtobaghandler(item) {
    dispatch(AddBag(item));
  }
  function wishlistHandler(item) {
    dispatch(Addwishlist(item));
  }

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-3 gap-4 px-3 py-5">
          {productitem.map((item) => {
            return (
              <div key={item.id} className="flex flex-col justify-center items-center gap-3 border-2 border-green-600 rounded-xl">
                <div>
                  <img
                  className="py-4"
                    width={"100px"}
                    height={"50px"}
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="text-center">{item.title}</div>
                <div>₹{item.price}</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => addtobaghandler(item)}
                    type="button"
                    className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Add To Bag
                  </button>
                  <button
                    onClick={() => wishlistHandler(item)}
                    type="button"
                    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Wishlist
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default Product;