
import {
  Truck, ShieldCheck, RefreshCcw, Headphones
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping for orders above $50",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "100% secure payment guarantee",
  },
  {
    icon: RefreshCcw,
    title: "30 Days Return",
    description: "Simple return within 30 days",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "We support you anytime",
  },
];

export default function Section() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-blue-600 font-semibold text-sm mb-5">
              NEW COLLECTION
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
              Elevate Your Style With Our New Arrivals
            </h1>

            <p className="mt-5 text-gray-600 leading-7 max-w-lg">
              Discover the latest trends in fashion, shoes and
              accessories. Quality products for everyday life.
            </p>

            <div className="flex flex-wrap gap-4 mt-7">
              <a
                href="#products"
                className="bg-slate-900 text-white font-semibold px-7 py-3 rounded-lg hover:bg-blue-600 transition"
              >
                Shop Now
              </a>

              <a
                href="#discount"
                className="text-blue-600 font-semibold px-4 py-3"
              >
                Explore Deals →
              </a>
            </div>

            <div className="flex gap-2 mt-8">
              <span className="w-3 h-3 bg-blue-600 rounded-full" />
              <span className="w-3 h-3 bg-slate-300 rounded-full" />
              <span className="w-3 h-3 bg-slate-300 rounded-full" />
            </div>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85"
              alt="New sneaker collection"
              className="w-full h-72 md:h-96 object-contain p-4"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 -mt-5 relative">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div key={service.title} className="flex gap-4 items-center">
                <div className="shrink-0 bg-blue-50 text-blue-600 p-4 rounded-full">
                  <Icon size={25} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-5 mt-1">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
