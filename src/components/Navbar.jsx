import React, { useState } from "react";
import logo from "../assets/logo.svg";
import cartIcon from "../assets/icon-cart.svg";
import avatarImg from "../assets/image-avatar.png";
import smallImg1 from "../assets/image-product-1-thumbnail.jpg";
import deleteIcon from "../assets/icon-delete.svg";

const Navbar = ({ price, setPrice, qty, setQty }) => {
  const [toggleCart, setToggleCart] = useState(true);

  const fixedPrice = price.toFixed(2);

  const totalPrice = fixedPrice * qty;
  const totalPriceFixed = totalPrice.toFixed(2);

  return (
    <nav className="w-[80%] py-[40px] mx-auto border-b-2 flex justify-between items-center">
      <div className="left flex">
        <img
          className="mr-[80px] w-[100%] h-[20px] cursor-pointer"
          src={logo}
          alt="sneakers-logo"
        />
        <ul className="flex space-x-10">
          <li>
            <a
              className="text-darkGrayishBlue transition-all hover:border-b-4 border-orange hover:pb-[53px] hover:text-black"
              href="#"
            >
              Collections
            </a>
          </li>
          <li>
            <a
              className="text-darkGrayishBlue transition-all hover:border-b-4 border-orange hover:pb-[53px] hover:text-black"
              href="#"
            >
              Men
            </a>
          </li>
          <li>
            <a
              className="text-darkGrayishBlue transition-all hover:border-b-4 border-orange hover:pb-[53px] hover:text-black"
              href="#"
            >
              Women
            </a>
          </li>
          <li>
            <a
              className="text-darkGrayishBlue transition-all hover:border-b-4 border-orange hover:pb-[53px] hover:text-black"
              href="#"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-darkGrayishBlue transition-all hover:border-b-4 border-orange hover:pb-[53px] hover:text-black"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="right flex space-x-10 items-center relative">
        <span
          className={`${
            qty > 0 ? "flex" : "hidden"
          } bg-orange px-2 text-[10px] rounded-[12px] text-white absolute left-12 top-2`}
        >
          {qty}
        </span>
        <img
          onClick={() => setToggleCart((prev) => !prev)}
          className="h-[20px] cursor-pointer"
          src={cartIcon}
          alt="cart-icon"
        />
        <img
          className="h-[50px] cursor-pointer transition-all hover:border-4 rounded-full border-orange"
          src={avatarImg}
          alt="avatar-image"
        />
      </div>

      {qty !== 0 ? (
        <div
          className={`${
            toggleCart ? "hidden" : "block"
          } cart-container transition-all z-10 w-[370px] bg-white shadow-2xl rounded-lg py-8 absolute top-[12%] left-[65%]`}
        >
          <p className="pl-5 font-[700]">Cart</p>
          <hr className="my-4" />
          <div className="details flex justify-between px-5">
            <div className="small-img-container mb-4">
              <img className="w-[50px] rounded-lg" src={smallImg1} alt="" />
            </div>
            <div className="text">
              <p className="text-darkGrayishBlue">
                Fall limited edition sneakers
              </p>
              <span className="text-darkGrayishBlue mr-2">${fixedPrice}</span>
              <span className="text-darkGrayishBlue mr-2">x</span>
              <span className="text-darkGrayishBlue mr-2">{qty}</span>
              <span className="font-[700]">${totalPriceFixed}</span>
            </div>
            <div className="remove-container">
              <img
                onClick={() => setQty(0)}
                className="h-[20px] mt-3 cursor-pointer"
                src={deleteIcon}
                alt="remove-from-cart"
              />
            </div>
          </div>
          <button className="bg-orange text-white mx-5 block rounded-lg py-4 w-[90%] transition-all hover:opacity-50">
            Checkout
          </button>
        </div>
      ) : (
        <div
          className={`${
            toggleCart ? "hidden" : "block"
          } cart-container transition-all z-10 w-[370px] h-[240px] bg-white shadow-2xl rounded-lg py-8 absolute top-[12%] left-[65%]`}
        >
          <p className="pl-5 font-[700]">Cart</p>
          <hr className="my-4" />
          <div className="details flex justify-center mt-14">
            <p className="font-[700] text-darkGrayishBlue">Your cart is empty.</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
