import { useState } from "react";

interface SubMenuItem {
  title: string;
  href: string;
}

interface MenuItem {
  title: string;
  href?: string;
  subItems?: {
    title: string;
    items: SubMenuItem[];
  }[];
}

const menuItems: MenuItem[] = [
  {
    title: "About Us",
    subItems: [
      {
        title: "Company",
        items: [
          { title: "Awards", href: "/awards" },
          { title: "Our Team", href: "/our-team" },
          { title: "Timeline", href: "/timeline" }
        ]
      }
    ]
  },
  {
    title: "Services",
    subItems: [
      {
        title: "UI/UX Design",
        items: [
          { title: "UX Prototyping", href: "/services/ux-prototyping" },
          { title: "Interface Design", href: "/services/interface-design" }
        ]
      },
      {
        title: "Web Development",
        items: [
          { title: "PHP Framework", href: "/services/php-framework" },
          { title: "MEAN Stack", href: "/services/mean-stack" },
          { title: "MERN Stack", href: "/services/mern-stack" },
          { title: "WordPress", href: "/services/wordpress" }
        ]
      },
      {
        title: "Mobile App Development",
        items: [
          { title: "React Native", href: "/services/react-native" },
          { title: "Flutter", href: "/services/flutter" },
          { title: "Native App Development", href: "/services/native-app" }
        ]
      }
    ]
  },
  {
    title: "Solutions",
    subItems: [
      {
        title: "Industries",
        items: [
          { title: "Real Estate", href: "/solutions/real-estate" },
          { title: "Healthcare", href: "/solutions/healthcare" },
          { title: "E-Learning", href: "/solutions/e-learning" },
          { title: "Fintech", href: "/solutions/fintech" }
        ]
      }
    ]
  },
  { title: "Case Studies", href: "/case-studies" },
  { title: "Blog", href: "/blog" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="fixed w-full z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Sakam</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => setActiveMenu(item.title)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <a
                  href={item.href || "#"}
                  className="py-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  {item.title}
                </a>
                
                {item.subItems && activeMenu === item.title && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg p-4 grid grid-cols-1 gap-4">
                    {item.subItems.map((section) => (
                      <div key={section.title}>
                        <h3 className="font-semibold text-gray-900 mb-2">{section.title}</h3>
                        <ul className="space-y-2">
                          {section.items.map((subItem) => (
                            <li key={subItem.title}>
                              <a
                                href={subItem.href}
                                className="text-gray-600 hover:text-blue-600 block"
                              >
                                {subItem.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => setIsOpen(true)}
              className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4">
            {menuItems.map((item) => (
              <div key={item.title} className="py-2">
                <a
                  href={item.href || "#"}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                >
                  {item.title}
                </a>
                {item.subItems && (
                  <div className="pl-8 mt-2 space-y-2">
                    {item.subItems.map((section) => (
                      <div key={section.title} className="space-y-2">
                        <h3 className="font-semibold text-gray-900">{section.title}</h3>
                        {section.items.map((subItem) => (
                          <a
                            key={subItem.title}
                            href={subItem.href}
                            className="block px-4 py-1 text-gray-600 hover:text-blue-600"
                          >
                            {subItem.title}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 mt-4">
              <button
                onClick={() => setIsOpen(true)}
                className="w-full bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Contact Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-blue-700 text-white p-6">
                <h2 className="text-2xl font-bold">Let's Build Something Great Together</h2>
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
