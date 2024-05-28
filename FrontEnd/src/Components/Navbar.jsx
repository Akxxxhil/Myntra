import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
function Navbar() {
    return (
        <div className="flex justify-around border-red-500 border-solid border py-5">
            <div>Myntra</div>

            <div className="flex gap-4">
                <div>Men</div>
                <div>Women</div>
                <div>Kids</div>
                <div>Home&Living</div>
                <div>Beauty</div>
                <div>Studio</div>
            </div>

            <div>
                <input type="text" name="" id="" placeholder="Search" />
                <span></span>
            </div>

            <div className="flex gap-4">
                <NavLink to="/profile">
                <div className="flex flex-col items-center cursor-pointer">
                    <span><IoPersonOutline /></span>
                    Profile
                </div>
                </NavLink>
                <div className="flex flex-col items-center">
                    <span><CiHeart /></span>
                    Wishlist
                </div>
                <div className="flex flex-col items-center">
                    <span><IoBagOutline /></span>
                    Bag
                </div>
            </div>
        </div>
    )
}
export default Navbar