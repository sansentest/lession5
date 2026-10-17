
import { ArrowRight, Tag } from "lucide-react";

export default function Discount() {
  return (
    <section id="discount" className="max-w-7xl mx-auto px-6 py-12">
      <div className="relative overflow-hidden bg-rose-50 rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative z-10">
          <p className="text-red-500 font-semibold text-sm">
            <Tag size={15} className="inline mr-2" />
            LIMITED TIME OFFER
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4">
            Get Up To 30% Off
          </h2>

          <p className="text-gray-600 mt-4 leading-7">
            Enjoy special discounts on selected items.
            Hurry up! Shop your favorites today.
          </p>

          <div className="flex gap-3 mt-6">
            {[
              ["02", "Days"],
              ["14", "Hours"],
              ["36", "Minutes"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="bg-white rounded-lg p-3 text-center min-w-16"
              >
                <p className="text-red-500 text-2xl font-bold">
                  {number}
                </p>
                <p className="text-xs text-gray-500">{label}</p>
              </div>
            ))}
          </div>

          <a
            href="#products"
            className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg mt-6 hover:bg-red-600 transition"
          >
            Shop The Sale <ArrowRight size={18} />
          </a>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85"
            alt="Fashion sale collection"
            className="w-full h-64 md:h-80 object-cover rounded-xl"
          />

          <div className="absolute top-4 right-4 bg-red-500 text-white w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-lg">
            <span className="text-xs">UP TO</span>
            <span className="text-2xl font-extrabold">30%</span>
            <span className="text-xs">OFF</span>
          </div>
        </div>
      </div>
    </section>
  );
}
