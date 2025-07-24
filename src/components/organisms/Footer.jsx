import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import ApperIcon from "@/components/ApperIcon"

const Footer = () => {
  const handleClientPortal = () => {
    window.open("http://support.techlopers.com", "_blank")
  }
  
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg p-2">
                <ApperIcon name="Code" className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Techlopers</h3>
                <p className="text-sm text-gray-400">Solutions Pvt. Ltd.</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Reliable IT Solutions for Modern Businesses since 2014. We deliver scalable, 
              secure technology solutions that drive business growth.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "Contact", href: "/contact" }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <nav className="space-y-2">
              <Link
                to="/privacy"
                className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Terms of Use
              </Link>
              <button
                onClick={handleClientPortal}
                className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Client Portal
              </button>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <ApperIcon name="Phone" className="h-4 w-4 text-accent-500" />
                <span className="text-gray-400 text-sm">+91 95607 85875</span>
              </div>
              <div className="flex items-center space-x-3">
                <ApperIcon name="Mail" className="h-4 w-4 text-accent-500" />
                <span className="text-gray-400 text-sm">support@techlopers.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <ApperIcon name="MapPin" className="h-4 w-4 text-accent-500 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <p>Corporate Office: Noida, India</p>
                  <p>Global Office: New York, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Techlopers Solutions Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <ApperIcon name="Shield" className="h-4 w-4 text-accent-500" />
              <span>Secure</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <ApperIcon name="Zap" className="h-4 w-4 text-accent-500" />
              <span>Fast</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <ApperIcon name="Users" className="h-4 w-4 text-accent-500" />
              <span>Reliable</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer