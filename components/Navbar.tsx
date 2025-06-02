import { useState } from "react";

interface SubMenuItem {
  title: string;
  href: string;
  subItems?: SubMenuItem[];
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
          { title: "Meet Our Team", href: "/meet-the-exceptional-team" },
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
          { title: "UX Prototyping", href: "/services/ux-prototyping" }
        ]
      },
      {
        title: "Mobile App Development",
        items: [
          { title: "Hybrid", href: "/services/hybrid" },
          { title: "Swift", href: "/services/swift" },
          { title: "React Native", href: "/services/react-native" },
          { title: "Kotlin", href: "/services/kotlin" },
          { title: "Flutter", href: "/services/flutter" },
          { title: "Java", href: "/services/java" },
          { title: "Native App Development", href: "/services/native-app-development" },
          { title: "Objective-C", href: "/services/objective-c" }
        ]
      },
      {
        title: "Web Development",
        items: [
          { title: "PHP Framework", href: "/services/php-framework", subItems: [
            { title: "Zend Framework", href: "/services/zend-framework" },
            { title: "Cake PHP", href: "/services/cake-php" },
            { title: "Laravel", href: "/services/laravel" }
          ]},
          { title: "MEAN Stack", href: "/services/mean-stack", subItems: [
            { title: "Node.js", href: "/services/node-js" },
            { title: "Angular.js", href: "/services/angular-js" }
          ]},
          { title: "MERN Stack", href: "/services/mern-stack", subItems: [
            { title: "React.js", href: "/services/react-js" }
          ]},
          { title: "Open Source Technology", href: "/services/open-source", subItems: [
            { title: "Drupal", href: "/services/drupal" },
            { title: "Python", href: "/services/python" }
          ]},
          { title: "ECommerce", href: "/services/ecommerce", subItems: [
            { title: "WooCommerce", href: "/services/woocommerce" },
            { title: "Magento", href: "/services/magento" },
            { title: "Shopify", href: "/services/shopify" }
          ]},
          { title: "WordPress", href: "/services/wordpress", subItems: [
            { title: "Elementor", href: "/services/elementor" }
          ]},
          { title: "CMS", href: "/services/cms", subItems: [
            { title: "Webflow", href: "/services/webflow" },
            { title: "Wix", href: "/services/wix" },
            { title: "Squarespace", href: "/services/squarespace" },
            { title: "Hubspot", href: "/services/hubspot" },
            { title: "GoHighLevel", href: "/services/gohighlevel" }
          ]}
        ]
      },
      {
        title: "Digital Marketing",
        items: [
          { title: "SEO", href: "/services/seo" },
          { title: "SMM", href: "/services/smm" },
          { title: "PPC", href: "/services/ppc" },
          { title: "ORM", href: "/services/orm" },
          { title: "Content Marketing", href: "/services/content-marketing" }
        ]
      },
      {
        title: "Other Services",
        items: [
          { title: "Internet of Things", href: "/services/iot" },
          { title: "Blockchain Development", href: "/services/blockchain" },
          { title: "Game Development", href: "/services/game-development" },
          { title: "Artificial Intelligence", href: "/services/ai", subItems: [
            { title: "Deep Learning", href: "/services/deep-learning" },
            { title: "Chatbot", href: "/services/chatbot" },
            { title: "Decision Management", href: "/services/decision-management" },
            { title: "Machine Learning", href: "/services/machine-learning" },
            { title: "NLP", href: "/services/nlp" }
          ]}
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
          { title: "Sports", href: "/solutions/sports" },
          { title: "Metaverse", href: "/solutions/metaverse" },
          { title: "Real Estate", href: "/solutions/real-estate" },
          { title: "Ride Sharing", href: "/solutions/ride-sharing" },
          { title: "Dating", href: "/solutions/dating" },
          { title: "Fitness App", href: "/solutions/fitness-app" },
          { title: "Multivendor Marketplace", href: "/solutions/multivendor-marketplace" },
          { title: "On Demand Service", href: "/solutions/on-demand-service" },
          { title: "BFSI", href: "/solutions/bfsi" },
          { title: "Job Portal", href: "/solutions/job-portal" },
          { title: "Social Media", href: "/solutions/social-media" },
          { title: "Travel and Tourism", href: "/solutions/travel-tourism" },
          { title: "Crowdfunding", href: "/solutions/crowdfunding" },
          { title: "Salon and Spa", href: "/solutions/salon-spa" },
          { title: "Online Ordering", href: "/solutions/online-ordering" },
          { title: "Fintech", href: "/solutions/fintech" },
          { title: "Healthcare", href: "/solutions/healthcare" },
          { title: "Logistics & Distribution", href: "/solutions/logistics" },
          { title: "Travel Booking", href: "/solutions/travel-booking" },
          { title: "E-Learning", href: "/solutions/e-learning" },
          { title: "Food Delivery", href: "/solutions/food-delivery" }
        ]
      }
    ]
  },
  { title: "Case Studies", href: "/case-studies" },
  {
    title: "What's New",
    subItems: [
      {
        title: "Updates",
        items: [
          { title: "News & Events", href: "/news-events" },
          { title: "CSR", href: "/csr" },
          { title: "Society", href: "/society" },
          { title: "Workplace", href: "/workplace" }
        ]
      }
    ]
  },
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
                            <li key={subItem.title} className="group relative">
                              <a
                                href={subItem.href}
                                className="text-gray-600 hover:text-blue-600 block py-1"
                              >
                                {subItem.title}
                                {subItem.subItems && (
                                  <span className="float-right">›</span>
                                )}
                              </a>
                              {subItem.subItems && (
                                <div className="absolute left-full top-0 w-64 bg-white shadow-lg rounded-lg p-4 ml-2 hidden group-hover:block">
                                  <ul className="space-y-2">
                                    {subItem.subItems.map((nestedItem) => (
                                      <li key={nestedItem.title}>
                                        <a
                                          href={nestedItem.href}
                                          className="text-gray-600 hover:text-blue-600 block py-1"
                                        >
                                          {nestedItem.title}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
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
