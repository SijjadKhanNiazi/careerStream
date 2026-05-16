function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-2xl">
                C
              </div>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  CareerStream
                </h2>
                <p className="text-sm text-gray-400">
                  Career Guidance Platform
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md text-gray-400 leading-relaxed">
              Empowering students and job seekers with personalized career
              guidance, skill development resources, and direct industry
              connections.
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-gray-400">✉️</span>
                <a
                  href="mailto:contact@careerstream.com"
                  className="hover:text-white transition-colors"
                >
                  contact@careerstream.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400">📍</span>
                <span>Lahore, Pakistan</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-5">
              <a
                href="#"
                className="hover:text-white transition-colors text-xl"
              >
                🔗
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors text-xl"
              >
                𝕏
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors text-xl"
              >
                🐙
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors text-xl"
              >
                📸
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold text-white mb-4">Platform</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Find Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Career Assessment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Skill Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Resume Builder
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Interview Prep
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Career Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Industry Insights
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  University Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-gray-800 pt-8 a ml-[250px]">
          <div className="max-w-md">
            <h3 className="font-semibold text-white mb-2">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-4">
              Get career tips, job alerts, and platform updates delivered to
              your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-6 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-gray-400">
              © {currentYear} CareerStream. All rights reserved.
            </div>

            <div className="flex items-center gap-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>

            <div className="text-gray-500 text-xs md:text-sm">
              Built with ❤️ by{" "}
              <span className="font-medium text-white">
                Engineer Sijjad Khan
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
