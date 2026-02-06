import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiTruck,
  FiRotateCcw,
  FiGift,
  FiHeart,
  FiMapPin,
} from "react-icons/fi";
import { LuLogIn } from "react-icons/lu";

import CartTrigger from "./CartTrigger";
import CartOffCanvas from "./CartOffCanvas";
import LoginModal from "./Login";


export default function Header() {
  const [cartOpen, setCartOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);


  return (
    <>
      <header className="w-full border-b border-gray-200">
        <div className="hidden md:flex items-center justify-between px-6 py-4 bg-black text-white text-xs p-3">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1">
              <FiTruck /> Free Shipping
            </span>
            <span className="flex items-center gap-1">
              <FiRotateCcw /> Return To Store
            </span>
            <span className="flex items-center gap-1">
              <FiGift /> Online Gift Card
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1">
              <FiMapPin /> Delivering To
            </span>
            <Link to="#">Download Our Apps</Link>
            <Link to="#">Store Locator</Link>
            <Link to="#">Help</Link>
          </div>
        </div>

        <div className="flex items-center gap-6 px-6 py-4">
          <Link
            to="/"
            className="bg-[#d6b28a] text-white font-black text-2xl px-4 py-2 lowercase"
          >
            LIONIES
          </Link>

          <div className="flex-1">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full bg-gray-100 px-4 py-3 text-sm outline-none"
            />
          </div>

          <div className="flex items-center gap-6 text-sm">
  <Link className="flex flex-col items-center ">
    <FiHeart size={18} />
    <span>Wishlist</span>
  </Link>

  {/* Cart Trigger */}
  <CartTrigger onOpen={() => setCartOpen(true)} />

 <button
  onClick={() => setLoginOpen(true)}
  className="flex flex-col items-center  cursor-pointer"
>
 <LuLogIn size={18} />
    <span>Login</span>

</button>

</div>

<CartOffCanvas
  isOpen={cartOpen}
  onClose={() => setCartOpen(false)}
/>

<LoginModal
  isOpen={loginOpen}
  onClose={() => setLoginOpen(false)}
/>


        </div>

        <div className="flex justify-center gap-10 py-4 border-t border-gray-100 text-sm">
          {["Polo Shop", "GenZ Store", "Women", "Men", "Kids", "Max Sport"].map(
            (item) => (
              <Link key={item} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-gray-200 rounded-full" />
                <span>{item}</span>
              </Link>
            ),
          )}
        </div>

        <div className="relative w-full overflow-hidden bg-linear-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] py-2">
          <div className="flex whitespace-nowrap animate-ticker text-white text-sm font-medium">
            <span className="mx-12">Discover Our Summer Sale</span>
            <span className="mx-12">15% Off Dresses With Valid ID!</span>
            <span className="mx-12">
              Shop Our New Arrivals With Intro Discounts!
            </span>
            <span className="mx-12">Shop Our Exclusive Dress Collection</span>

            <span className="mx-12">Discover Our Summer Sale</span>
            <span className="mx-12">15% Off Dresses With Valid ID!</span>
            <span className="mx-12">
              Shop Our New Arrivals With Intro Discounts!
            </span>
            <span className="mx-12">Shop Our Exclusive Dress Collection</span>
          </div>
        </div>


      </header>

      
    </>
  );
}
