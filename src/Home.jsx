
import Category from './components/Category'
import Discount from './components/Discount'
import Footer from './components/Footer'
import Header from './components/Header'
import Product from './components/Product'
import Section from './components/Section'
import { ArrowRight } from 'lucide-react'

const Home = () => {
    const products = [
        {
            id: 1,
            name: "White Sneakers",
            category: "Fashion",
            description: "Comfortable white sneakers for everyday wear.",
            price: 59.99,
            oldPrice: 79.99,
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
        },
        {
            id: 2,
            name: "Classic Backpack",
            category: "Bags & Accessories",
            description: "A stylish backpack for school, work, and travel.",
            price: 49.99,
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
        },
        {
            id: 3,
            name: "Minimal Watch",
            category: "Accessories",
            description: "A minimalist watch with a modern, elegant design.",
            price: 79.99,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
        },
        {
            id: 4,
            name: "Casual Hoodie",
            category: "Fashion",
            description: "A soft casual hoodie for a comfortable everyday look.",
            price: 39.99,
            image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=500&q=80",
        },
    ]

    return (
        <>
            <Header />
            <Section />
            <Category />

            <section
                id="popular-products"
                className="max-w-7xl mx-auto px-6 pt-10 pb-8"
            >
                <div className="flex justify-between items-center gap-4 mb-8">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                            Popular Products
                        </h2>
                    </div>

                    <a
                        href="#products"
                        className="text-blue-600 font-semibold text-sm flex items-center gap-2"
                    >
                        View All <ArrowRight size={17} />
                    </a>
                </div>

                <div
                    id="products"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8"
                >
                    {products.map((product) => (
                        <Product
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </section>

            <Discount />
            <Footer/>
        </>
    )
}

export default Home
