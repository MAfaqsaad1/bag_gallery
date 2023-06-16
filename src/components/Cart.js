import React from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  return (
    <div className="mt-10 md:mt-0">
      <div>
        <div className="container mx-auto ">
          <div className="flex flex-col md:flex-row shadow-md mb-10">
            <div className="md:w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold md:text-2xl text-lg">
                  {isEmpty ? "Your Cart is Empty" : "Shoping Cart"}
                </h1>
                <h2 className="font-semibold md:text-2xl text-lg">
                  Cart ({totalUniqueItems}) total Items: ({totalItems})
                </h2>
                <Link to="/">
                  <i class="fa-solid fa-xmark text-2xl md:hidden"></i>
                </Link>
              </div>

              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                  Quantity
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                  Price
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                  Total
                </h3>
              </div>
              <div className="h-[50vh] overflow-scroll overflow-x-hidden">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                  >
                    <div className="flex w-2/5">
                      <div className="w-20">
                        <img className="h-24" src={item.img} alt="" />
                      </div>
                      <div className="flex flex-col justify-between ml-4 flex-grow">
                        <span className="font-bold text-sm">{item.title} </span>
                        <span className="text-blue-500 text-xs">
                          {item.disc}
                        </span>
                        <p
                          onClick={() => removeItem(item.id)}
                          className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
                        >
                          Remove
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center w-1/5 items-center">
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                        className="text-xl font-bold"
                      >
                        -
                      </button>
                      <input
                        className="mx-2 border text-center w-8"
                        type="text"
                        value={item.quantity}
                      />
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                        className="text-xl font-bold"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      ${item.price}.00
                    </span>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      ${item.price * item.quantity}.00
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => emptyCart()}
                className="flex font-semibold text-red-600 hover:text-red-700 text-sm mt-10"
              >
                Empety Cart
              </button>
            </div>

            <div id="summary" className="md:w-1/4 px-8 py-10">
              <div className="flex justify-between items-center pb-8">
                <h1 className="font-semibold text-2xl ">Order Summary</h1>
                <Link to="/">
                  <i class="fa-solid fa-xmark text-xl"></i>
                </Link>
              </div>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Items ({totalUniqueItems})
                </span>
                <span className="font-semibold text-sm">{cartTotal}$</span>
              </div>
              <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">
                  Shipping
                </label>
                <select className="block p-2 text-gray-600 w-full text-sm">
                  <option>Standard shipping - $0.00</option>
                </select>
              </div>
              <div className="py-10">
                <label
                  for="promo"
                  className="font-semibold inline-block mb-3 text-sm uppercase"
                >
                  Promo Code
                </label>
                <input
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  className="p-2 text-sm w-full"
                />
              </div>
              <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                Apply
              </button>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span className="text-xl">Total cost</span>
                  <span className="text-xl">${cartTotal} </span>
                </div>
                <button
                  onClick={() => {
                    emptyCart();
                    alert("Your oder is placed");
                  }}
                  className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
