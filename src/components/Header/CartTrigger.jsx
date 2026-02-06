import { FiShoppingBag } from "react-icons/fi";

export default function CartTrigger({ onOpen }) {
  return (
    <button
      onClick={onOpen}
      className="flex flex-col items-center relative focus:outline-none  cursor-pointer"
    >
      <FiShoppingBag size={18} />
         <span>Basket</span>
    </button>
  );
}
