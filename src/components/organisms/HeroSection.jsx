import React from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import ApperIcon from "@/components/ApperIcon"
import Button from "@/components/atoms/Button"

const HeroSection = () => {
  const navigate = useNavigate()
  
  const handleClientPortal = () => {
    window.open("http://support.techlopers.com", "_blank")
  }
  
  return (
    <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="gradient-text">Reliable IT Solutions</span>
            <br />
            for Modern Businesses
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Techlopers Solutions Pvt. Ltd. is a leading IT services company founded in 2014 
            and registered under the Companies Act in 2016. We deliver reliable, scalable, 
            and customized technology solutions to help businesses grow with confidence.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate("/contact")}
              className="flex items-center gap-2 px-8 py-4"
            >
              <ApperIcon name="MessageSquare" className="h-5 w-5" />
              Request a Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleClientPortal}
              className="flex items-center gap-2 px-8 py-4"
            >
              <ApperIcon name="ExternalLink" className="h-5 w-5" />
              Client Portal Login
            </Button>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-16 h-16 bg-accent-200 rounded-full opacity-20"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/2 right-20 w-12 h-12 bg-primary-300 rounded-full opacity-15"
            animate={{ x: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection