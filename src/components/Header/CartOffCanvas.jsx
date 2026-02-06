import { useState } from "react";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";


export default function CartOffCanvas({ isOpen, onClose }) {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Tee",
      price: 1499,
      image: "/image/tee1.jpg",
      tag: "Cotton Fit",
      qty: 1,
    },
    {
      id: 2,
      name: "Slim Fit Jeans",
      price: 2499,
      image: "/image/jeans.jpg",
      tag: "Denim",
      qty: 1,
    },
  ]);


  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };





  const subtotal = cartItems.reduce(
  (sum, item) => sum + item.price * item.qty,
  0
);

const discount = 500;
const total = subtotal - discount;




  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        />
      )}

      {/* Offcanvas */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transform transition-transform duration-600 ${isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="bg-white shadow-2xl overflow-hidden">

          {/* Header */}
          <div
            className="flex items-center justify-between px-6 py-4 bg-[#927f68]"

          >
            <div className="flex items-center gap-2 text-white">
              <ShoppingBag size={20} />
              <h3 className="text-lg font-semibold">Your Basket</h3>
            </div>

            <button
              onClick={onClose}
              className="bg-white/20 p-2 rounded-full text-white hover:bg-white/30"
            >
              <X size={18} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="max-w-5xl mx-auto px-6 py-6 space-y-4">

            {/* Item */}
         {cartItems.map((item) => (
  <div
    key={item.id}
    className="flex gap-4 bg-gray-50 p-4 shadow-sm"
  >
    <img
      src={item.image}
      className="w-20 h-20 rounded-lg object-cover"
      alt=""
    />

    <div className="flex-1">
      <h4 className="font-semibold text-gray-800">
        {item.name}
      </h4>

      <span className="inline-block mt-1 px-2 py-0.5 text-xs rounded-full bg-[#F5F0DD]">
        {item.tag}
      </span>

      <div className="flex items-center gap-3 mt-3">
        <button className="w-7 h-7 rounded-full border flex items-center justify-center">
          <Minus size={14} />
        </button>

        <span className="font-medium">{item.qty}</span>

        <button className="w-7 h-7 rounded-full border flex items-center justify-center">
          <Plus size={14} />
        </button>
      </div>
    </div>

    <div className="text-right">
      <div className="font-semibold text-gray-800">
        ₹{item.price}
      </div>

      <button
        onClick={() => removeItem(item.id)}
        className="text-xs text-red-500 mt-2 hover:underline"
      >
        Remove
      </button>
    </div>
  </div>
))}

          </div>

          {/* Sticky Summary */}
          <div className="border-t border-gray-300 bg-white sticky bottom-0">
            <div className="max-w-5xl mx-auto px-6 py-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
               <span>₹{subtotal}</span>
              </div>

              <div className="flex justify-between text-sm text-green-600">
                <span>Discount</span>
               <span>- ₹{discount}</span>
              </div>

              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
               <span>₹{total}</span>
              </div>

              <button
                className="w-full py-3 rounded-xl font-semibold text-white mt-3 bg-[#927f68]"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
