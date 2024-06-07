import { IoPersonOutline } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="fixed w-screen flex justify-between px-5   py-5 box-border">
            <div className="flex flex-col items-center justify-center cursor-pointer">
                <span><RiMenu2Line /></span>
            </div>
            <div className="flex justify-center items-center text-center font-bold tracking-wide text-3xl flex-grow">SNITCH</div>
            <div className="flex gap-4">
                <NavLink to="/profile">
                    <div className="flex flex-col items-center cursor-pointer">
                        <span><IoPersonOutline /></span>
                        Profile
                    </div>
                </NavLink>
                <div className="flex flex-col items-center">
                    <span><CiSearch /></span>
                    Search
                </div>
                <NavLink to="/wishlist">
                    <div className="flex flex-col items-center cursor-pointer">
                        <span><CiHeart /></span>
                        Wishlist
                    </div>
                </NavLink>
                <NavLink to="/bag">
                    <div className="flex flex-col items-center cursor-pointer">
                        <span><IoBagOutline /></span>
                        Bag
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;
