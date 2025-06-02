
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">Sakam</div>
        <nav className="space-x-4 hidden md:block">
          <a href="#hero" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
          <a href="#portfolio" className="hover:text-blue-600">Portfolio</a>
          <button onClick={() => setIsOpen(true)} className="bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700">Contact Us</button>
        </nav>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-blue-700 text-white p-6">
                <h2 className="text-2xl font-bold">Lets Build Something Great Together</h2>
                <p className="mt-2">Our Consultants will reply back to you within 7 hours or less</p>
                <div className="flex space-x-4 mt-4">
                  {["Ayan Sarkar", "Jason Gomes", "Souren Adak", "Soumyo Chaki"].map((name) => (
                    <div key={name} className="text-center">
                      <div className="w-16 h-16 bg-white rounded-full mx-auto" />
                      <p className="text-sm mt-1">{name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <button onClick={() => setIsOpen(false)} className="float-right text-xl">×</button>
                <h2 className="text-xl font-bold mb-4">Ready To Get Started?</h2>
                <form className="space-y-4">
                  <input type="text" placeholder="Name*" className="w-full p-2 border rounded-full" required />
                  <input type="email" placeholder="Email*" className="w-full p-2 border rounded-full" required />
                  <input type="tel" placeholder="Phone*" className="w-full p-2 border rounded-full" required />
                  <select className="w-full p-2 border rounded-full" required>
                    <option value="">Select Budget*</option>
                    <option value="less-1000">Less than $1,000</option>
                    <option value="1000-5000">$1,000 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="more-10000">More than $10,000</option>
                  </select>
                  <textarea placeholder="Message*" className="w-full p-2 border rounded-xl" rows={4} required></textarea>
                  <button type="submit" className="w-full bg-pink-600 text-white p-2 rounded-full">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
