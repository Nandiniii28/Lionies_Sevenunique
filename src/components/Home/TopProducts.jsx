import { BsCart } from "react-icons/bs";
import banner from "../../../public/images/shoip_your_size_1_1.webp"
const products = [
    {
        id: 1,
        front: "../images/similar1.png",
        back: "../images/similarback1.png",
        name: "Polo - Speed Hunters Oversized",
        price: "759.00",
        original: "1,999.00",
    },
    {
        id: 2,
        front: "../images/similar2.png",
        back: "../images/similarback2.jpeg",
        name: "Polo - Speed Hunters Oversized",
        price: "699.00",
        original: "1,899.00",
    },
    {
        id: 3,
        front: "../images/similar3.png",
        back: "../images/similarback3.png",
        name: "Polo - Speed Hunters Oversized",
        price: "999.00",
        original: "1,899.00",
    },
    {
        id: 4,
        front: "../images/similar4.png",
        back: "../images/similarback4.png",
        name: "Polo - Speed Hunters Oversized",
        price: "799.00",
        original: "1,899.00",
    },
    {
        id: 5,
        front: "../images/similar5.png",
        back: "../images/similarback5.png",
        name: "Polo - Speed Hunters Oversized",
        price: "899.00",
        original: "1,899.00",
    },
    {
        id: 6,
        front: "../images/similar6.png",
        back: "../images/similarback6.png",
        name: "Polo - Speed Hunters Oversized",
        price: "1299.00",
        original: "1,899.00",
    },
    {
        id: 7,
        front: "../images/similar7.png",
        back: "../images/similarback7.png",
        name: "Polo - Speed Hunters Oversized",
        price: "599.00",
        original: "1,899.00",
    },
    {
        id: 8,
        front: "../images/similar1.png",
        back: "../images/similarback1.png",
        name: "Polo - Speed Hunters Oversized",
        price: "759.00",
        original: "1,999.00",
    },
    {
        id: 9,
        front: "../images/similar2.png",
        back: "../images/similarback2.jpeg",
        name: "Polo - Speed Hunters Oversized",
        price: "699.00",
        original: "1,899.00",
    },
    {
        id: 10,
        front: "../images/similar3.png",
        back: "../images/similarback3.png",
        name: "Polo - Speed Hunters Oversized",
        price: "999.00",
        original: "1,899.00",
    },
];

const TopProducts = () => {
    return (
        <>
            
        <div className="max-w-7xl mx-auto px-6 py-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#633426] mb-10 text-left">
                Top Rated Products
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="group cursor-pointer">
                        <div className="relative overflow-hidden bg-gray-100">
                            {/* Main Image */}
                            <img
                                src={product.front}
                                alt="product"
                                className="w-full transition duration-500 group-hover:opacity-0"
                            />

                            {/* Hover Image */}
                            <img
                                src={product.back}
                                alt="product hover"
                                className="w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-500"
                            />

                            {/* Cart Button */}
                            <div className="absolute top-3 right-[-60px] group-hover:right-3 transition-all duration-500">
                                <div className="relative group/cart">
                                    <div className="bg-white p-2 rounded-full shadow-lg cursor-pointer">
                                        <BsCart size={18} />
                                    </div>
                                    {/* Tooltip */}
                                    <span className="absolute right-12 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/cart:opacity-100 transition whitespace-nowrap">
                                        Add to cart
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Product Info */}
                        <p className="mt-3 text-sm font-medium">{product.name}</p>
                        <p className="text-red-500 font-semibold">
                            Rs. {product.price}{" "}
                            <span className="line-through text-gray-400 ml-2">
                                Rs. {product.original}
                            </span>
                        </p>
                    </div>
                ))}
            </div>
           
        </div>
        <div className="w-full my-10">
                <img src={banner} className="w-full"/>

            </div>
        </>
    );
};

export default TopProducts;
