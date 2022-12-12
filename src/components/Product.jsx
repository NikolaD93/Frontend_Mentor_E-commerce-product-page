import React, { useState } from "react";
import cartIcon from "../assets/icon-cart-white.svg";
import closeIcon from "../assets/icon-close-white.svg";
import prevIcon from "../assets/icon-previous.svg";
import nextIcon from "../assets/icon-next.svg";
import { data } from "../constants/images";

const Product = ({ price, qty, setQty }) => {
  const products = [...data];
  const [value, setValue] = useState(0);

  const [modal, setModal] = useState(true);

  const largeImage = products[value].largeImg;

  const fixedPrice = price.toFixed(2);

  const totalPrice = fixedPrice * qty;
  const totalPriceFixed = totalPrice.toFixed(2);

  const decrease = () => {
    if (qty === 0) {
      return;
    }
    {
      setQty((prev) => prev - 1);
    }
  };

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  const goBack = () => {
    value === 0 ? setValue(0) : setValue((prev) => prev - 1);
  };

  const goForward = () => {
    value === products.length - 1
      ? setValue(products.length - 1)
      : setValue((prev) => prev + 1);
  };

  return (
    <main>
      <div className="main-wrapper flex flex-col md:flex-row md:px-[200px] md:py-[100px] relative">
        <div className="image md:basis-1/2 md:flex md:flex-col md:justify-between">
          <div className="hidden md:block large-image">
            <img
              onClick={toggleModal}
              className="object-cover cursor-pointer rounded-xl w-[400px] h-[400px]"
              src={largeImage}
              alt="snekers-photo"
            />
          </div>
          <div className="md:hidden large-image">
            <img
              onClick={goBack}
              className="bg-white rounded-full p-4 absolute top-[15%] left-6 cursor-pointer"
              src={prevIcon}
              alt="go-back"
            />
            <img
              className="w-[100%] h-[300px] object-cover"
              src={largeImage}
              alt="snekers-photo"
            />
            <img
              onClick={goForward}
              className="bg-white rounded-full p-4 absolute top-[15%] left-[82%] cursor-pointer"
              src={nextIcon}
              alt="go-forward"
            />
          </div>
          <div className="small-images hidden md:flex mt-7 justify-between w-[400px]">
            {data.map((img, idx) => {
              return (
                <div key={img.id} className="single-image">
                  <img
                    onClick={() => setValue(idx)}
                    className="w-[80px] cursor-pointer rounded-xl transition-all hover:opacity-25 hover:border-[3px] border-orange"
                    src={img.smallImg}
                    alt="product-photo"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={`${
            modal ? "hidden" : "hidden md:block"
          } absolute -top-[20%] right-0 -bottom-[20%] left-0 bg-lightBlack`}
        >
          <div
            className={
              "basis-1/2 flex flex-col justify-between absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
            }
          >
            <div className="large-image">
              <img
                className="w-[400px] h-[400px] rounded-xl cursor-pointer"
                src={largeImage}
                alt="snekers-photo"
              />
              <img
                onClick={toggleModal}
                className="w-[20px] h-[20px] absolute -top-8 left-[95%] transition-all cursor-pointer hover:scale-150"
                src={closeIcon}
                alt="close-icon"
              />
              <img
                onClick={goBack}
                className="bg-white p-4 rounded-full absolute top-[36%] -translate-x-[20px] cursor-pointer transition-all hover:scale-150"
                src={prevIcon}
                alt="previous"
              />
              <img
                onClick={goForward}
                className="bg-white p-4 rounded-full absolute top-[36%] left-[95%] cursor-pointer transition-all hover:scale-150"
                src={nextIcon}
                alt="next"
              />
            </div>
            <div className="small-images flex mt-7 justify-around w-[400px]">
              {data.map((img, idx) => {
                return (
                  <div key={img.id} className="single-image">
                    <img
                      onClick={() => setValue(idx)}
                      className="w-[60px] cursor-pointer rounded-xl transition-all hover:border-[3px] border-orange"
                      src={img.smallImg}
                      alt="product-photo"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="description p-6 md:basis-1/2 md:py-[40px]">
          <p className="text-orange text-[14px] tracking-widest uppercase font-[700] mb-6">
            Sneaker company
          </p>
          <h1 className="text-3xl md:text-4xl capitalize font-[700]">
            Fall limited edition <br /> sneakers
          </h1>
          <p className="hidden md:block text-darkGrayishBlue my-10 leading-7">
            These low-profile sneakers are your perfect casual wear <br />
            companion. Featuring a durable rubber outer sole, they'll <br />
            withstand everything the weather can offer.
          </p>
          <p className="md:hidden text-darkGrayishBlue my-6 leading-7">
            These low-profile sneakers are your perfect <br /> casual wear
            companion. Featuring a durable <br /> rubber outer sole, they'll
            withstand every - thing the br weather can offer.
          </p>

          <div className="price flex items-center">
            <span className="text-3xl font-[700] mr-4">${fixedPrice}</span>
            <span className="bg-paleOrange text-orange font-[700] py-1 px-2 rounded-lg">
              50%
            </span>
            <p className="md:hidden line-through text-grayishBlue font-[700] translate-x-[100px] mb-2">
              $250.00
            </p>
          </div>
          <p className="hidden md:block line-through text-grayishBlue font-[700] mt-2">
            $250.00
          </p>

          <div className="buttons-container flex flex-col md:flex-row mt-8">
            <div className="state w-[100%] flex justify-around md:justify-center items-center space-x-10 bg-lightGrayishBlue rounded-lg p-3 md:p-2 md:mr-4 md:w-[150px]">
              <button
                onClick={decrease}
                className="minus text-[24px] md:text-[20px] font-[700] text-orange transition-all hover:opacity-50"
              >
                -
              </button>
              <p className="md:text-[14px] font-bold">{qty}</p>
              <button
                onClick={() => setQty((prev) => prev + 1)}
                className="plus text-[24px] md:text-[20px] font-[700] text-orange transition-all hover:opacity-50"
              >
                +
              </button>
            </div>
            <button className="add-btn border-none bg-orange rounded-lg text-white font-[700] px-[70px] py-[18px] mt-4 md:mt-0 md:py-0 md:text-[14px] transition-all btn-shadow hover:opacity-50">
              <img
                className="inline-block -translate-x-2 -translate-y-[2px] h-[15px]"
                src={cartIcon}
                alt="cart-icon"
              />
              &nbsp;Add to cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product;
