
import { ArrowRight } from "lucide-react";

const categories = [
    {
        id: 1,
        name: "Electronics",
        description: "Latest gadgets & devices",
    },
    {
        id: 2,
        name: "Fashion",
        description: "Style for every occasion",
    },
    {
        id: 3,
        name: "Accessories",
        description: "Complete your look",
    },
    {
        id: 4,
        name: "Bags & More",
        description: "Carry your essentials",
    },
];

export default function Category() {
    return (
        <section
            id="categories"
            className="max-w-7xl mx-auto px-4 py-12 md:py-10"
        >
            <div className="flex items-end justify-between gap-4 mb-8">
                <div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                       Category
                    </h2>
                </div>

                <a
                    href="#products"
                    className="flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all"
                >
                    View All
                    <ArrowRight size={17} />
                </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {categories.map((category) => (
                    <a
                        key={category.id}
                        href={`#${category.name.toLowerCase().replaceAll(" ", "-").replace("&", "and")}`}
                        className="group flex items-center gap-4 p-5 bg-white border border-gray-100 rounded-2xl hover:border-blue-200 hover:shadow-lg transition duration-300"
                    >
                        <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition">
                                {category.name}
                            </h3>

                            <p className="text-gray-500 text-xs mt-1">
                                {category.description}
                            </p>
                        </div>

                        <ArrowRight
                            size={18}
                            className="shrink-0 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition"
                        />
                    </a>
                ))}
            </div>
        </section>
    );
}