'use client'

export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8 mb-10 sm:mb-12">
          {/* Logo and Description */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="bg-gray-900 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-white font-bold text-base sm:text-lg">
                AI
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-400 max-w-md mb-4">
              Your smartest AI assistant for smarter sales and faster decisions. Transform your workflow with AI-powered analytics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-xs sm:text-sm text-gray-400 hover:text-ai-green transition-colors">Home</a></li>
              <li><a href="#features" className="text-xs sm:text-sm text-gray-400 hover:text-ai-green transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-xs sm:text-sm text-gray-400 hover:text-ai-green transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="text-xs sm:text-sm text-gray-400 hover:text-ai-green transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#resources" className="text-xs sm:text-sm text-gray-400 hover:text-ai-green transition-colors">Documentation</a></li>
              <li><a href="#community" className="text-xs sm:text-sm text-gray-400 hover:text-ai-green transition-colors">Community</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-ai-green transition-colors">Blog</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-ai-green transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} AI Assistant. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            <a href="#" className="text-gray-400 hover:text-ai-green transition-colors text-xs sm:text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-ai-green transition-colors text-xs sm:text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

