
import { Heart, Star, ShoppingCart } from "lucide-react";

export default function Product({ product }) {
  return (
    <article className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition duration-300">
      <div className="relative bg-gray-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 object-contain p-4 group-hover:scale-105 transition duration-300"
        />
        <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm hover:text-red-500 transition"
        >
          <Heart size={18} />
        </button>
      </div>

      <div className="p-4">
        <p className="text-xs text-blue-600 font-medium mb-2">
          {product.category}
        </p>

        <h3 className="font-semibold text-slate-900 text-base">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500 mt-2 min-h-10 line-clamp-2">
          {product.description}
        </p>

        <div className="flex gap-2 items-center mt-3">
          <span className="text-slate-900 font-bold">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <button
          type="button"
          className="w-full mt-4 flex justify-center items-center gap-2 bg-slate-900 text-white py-2.5 rounded-lg hover:bg-blue-600 transition"
        >
          <ShoppingCart size={17} />
          Add to Cart
        </button>
      </div>
    </article>
  );
}
