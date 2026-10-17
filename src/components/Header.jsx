
import {
  Search, UserRound, Heart, ShoppingCart,
  Package, ChevronDown, Menu
} from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between text-xs text-slate-600">
          <p className="flex items-center gap-2">
            <Package size={15} />
            Free shipping for orders over $50
          </p>
          <div className="hidden sm:flex gap-5">
            <a href="#footer">Help</a>
            <a href="#footer">Track Order</a>
            <button>English <ChevronDown size={12} className="inline" /></button>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-6">
        <a href="/" className="text-2xl font-extrabold text-slate-900">
          ShopCo<span className="text-blue-600">.</span>
        </a>

        <div className="hidden lg:flex items-center gap-7 text-sm font-medium">
          <a href="/" className="text-blue-600">Home</a>
          <a href="#products" className="hover:text-blue-600">Shop</a>
          <a href="#categories" className="hover:text-blue-600">Categories</a>
          <a href="#discount" className="hover:text-blue-600">Deals</a>
          <a href="#footer" className="hover:text-blue-600">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <label className="hidden md:flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-3 py-2">
            <Search size={17} className="text-gray-500" />
            <input
              type="search"
              placeholder="Search products..."
              className="bg-transparent outline-none w-32 text-sm"
            />
          </label>

          <button aria-label="Account" className="hidden sm:block">
            <UserRound size={21} />
          </button>
          <button aria-label="Wishlist">
            <Heart size={21} />
          </button>
          <button aria-label="Shopping cart" className="relative">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
              2
            </span>
          </button>
          <button aria-label="Open menu" className="lg:hidden">
            <Menu size={23} />
          </button>
        </div>
      </nav>
    </header>
  );
}
