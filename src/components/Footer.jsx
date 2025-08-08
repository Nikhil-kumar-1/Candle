import { FaFacebookF, FaInstagram, FaBehance, FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-serif mb-3">Ravangi</h2>
          <p className="text-sm text-gray-500 mb-4">
            Praesent nec nisl a purus blandit viverra. Pellentesque habitant morbi tristique senectus.
          </p>
          <p className="text-sm text-gray-500">Address: 1234 Heaven Street, USA</p>
          <p className="text-sm text-gray-500">Email: hello@domain.com</p>
          <p className="text-sm text-gray-500">Fax: (+100) 123 456 7890</p>
        </div>

        {/* Info Links */}
        <div>
          <h3 className="text-sm font-semibold mb-3 border-b border-gray-300 pb-1">INFO</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Custom Service</li>
            <li>F.A.Q.’s</li>
            <li>Ordering Tracking</li>
            <li>Contact Us</li>
            <li>Events</li>
            <li>Popular</li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-sm font-semibold mb-3 border-b border-gray-300 pb-1">SERVICES</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Sitemap</li>
            <li>Privacy Policy</li>
            <li>Your Account</li>
            <li>Advanced Search</li>
            <li>Term & Condition</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-semibold mb-3 border-b border-gray-300 pb-1">NEWSLETTERS</h3>
          <p className="text-sm text-gray-500 mb-4">
            Join 40,000+ Subscribers and get a new discount coupon
          </p>
          <div className="flex mb-4">
            <input
              type="email"
              placeholder="Your email address..."
              className="flex-1 border border-gray-300 px-3 py-2 text-sm focus:outline-none"
            />
            <button className="bg-black text-white px-4">
              <FaEnvelope />
            </button>
          </div>
          <div className="flex space-x-3 text-lg">
            <a href="#" className="p-2 border rounded-full hover:bg-black hover:text-white transition"><FaTwitter /></a>
            <a href="#" className="p-2 border rounded-full hover:bg-black hover:text-white transition"><FaFacebookF /></a>
            <a href="#" className="p-2 border rounded-full hover:bg-black hover:text-white transition"><FaBehance /></a>
            <a href="#" className="p-2 border rounded-full hover:bg-black hover:text-white transition"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        © Copyright 2025 | Ravangi By ShopiLaunch. Designed By Adonomics Technologies.
      </div>
    </footer>
  );
}
