
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Shop",
      links: [
        { label: "All Products", href: "#products" },
        { label: "Best Sellers", href: "#products" },
        { label: "New Arrivals", href: "#products" },
        { label: "Sale", href: "#discount" },
      ],
    },
    {
      title: "Customer Service",
      links: [
        { label: "Contact Us", href: "mailto:support@shopco.com" },
        { label: "Shipping & Delivery", href: "#footer" },
        { label: "Returns & Refunds", href: "#footer" },
        { label: "FAQs", href: "#footer" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#footer" },
        { label: "Privacy Policy", href: "#footer" },
        { label: "Terms & Conditions", href: "#footer" },
      ],
    },
  ];

  const socialLinks = [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
    e.currentTarget.reset();
  };

  return (
    <footer
      id="footer"
      className="bg-slate-50 border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Brand */}
          <div>
            <a
              href="/"
              className="text-2xl font-extrabold text-slate-900"
            >
              ShopCo<span className="text-blue-600">.</span>
            </a>

            <p className="text-gray-500 text-sm leading-6 mt-4 max-w-xs">
              Discover quality products at great prices.
              Your satisfaction is our priority.
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="px-3 py-2 rounded-lg bg-white border border-gray-200 text-gray-600 text-xs font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-bold text-slate-900 mb-5">
                {group.title}
              </h3>

              <ul className="space-y-3 text-sm text-gray-500">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-blue-600 transition"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4">
              Newsletter
            </h3>

            <p className="text-sm text-gray-500 leading-6 mb-4">
              Subscribe to receive special offers and updates
              about new arrivals.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="space-y-3"
            >
              <label
                htmlFor="newsletter-email"
                className="sr-only"
              >
                Email address
              </label>

              <input
                id="newsletter-email"
                name="email"
                type="email"
                placeholder="Your email address"
                autoComplete="email"
                required
                className="w-full min-w-0 border border-gray-200 bg-white rounded-lg px-3 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white rounded-lg py-3 text-sm font-semibold hover:bg-blue-600 transition"
              >
                Subscribe <span aria-hidden="true">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>
            © {currentYear} ShopCo. All rights reserved.
          </p>

          <p>
            Payment methods: Visa · Mastercard · PayPal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
