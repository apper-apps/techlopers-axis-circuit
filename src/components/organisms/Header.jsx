import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ApperIcon from "@/components/ApperIcon"
import Button from "@/components/atoms/Button"

const Header = ({ onClientPortalOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState("home")
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
const navigation = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" }
  ]
  
  const handleNavigation = (pageId) => {
    setCurrentPage(pageId)
    setIsMobileMenuOpen(false)
    // Scroll to section or handle page change logic here
    const element = document.getElementById(pageId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  const handleClientPortal = () => {
    onClientPortalOpen?.()
  }
  
  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg" 
          : "bg-white/90 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
<div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavigation('home')}>
            <div className="bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg p-2">
              <ApperIcon name="Code" className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">Techlopers</h1>
              <p className="text-xs text-gray-600">Solutions Pvt. Ltd.</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
<nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.id)}
                className={`text-sm font-medium transition-colors duration-200 relative ${
                  currentPage === item.id
                    ? "text-primary-600"
                    : "text-gray-600 hover:text-primary-600"
                }`}
              >
                {item.name}
                {currentPage === item.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-500"
                    layoutId="underline"
                  />
                )}
              </button>
            ))}
          </nav>
          
          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              variant="secondary"
              size="md"
              onClick={handleClientPortal}
              className="flex items-center gap-2"
            >
              <ApperIcon name="ExternalLink" className="h-4 w-4" />
              Client Portal
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <ApperIcon 
              name={isMobileMenuOpen ? "X" : "Menu"} 
              className="h-6 w-6 text-gray-600" 
            />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
{navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.id)}
                  className={`block text-base font-medium transition-colors duration-200 text-left ${
                    currentPage === item.id
                      ? "text-primary-600"
                      : "text-gray-600 hover:text-primary-600"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button
                variant="secondary"
                size="md"
                onClick={handleClientPortal}
                className="w-full flex items-center justify-center gap-2 mt-4"
              >
                <ApperIcon name="ExternalLink" className="h-4 w-4" />
                Client Portal
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header