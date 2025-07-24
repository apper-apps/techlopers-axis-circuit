import React from "react"
import { useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import ApperIcon from "@/components/ApperIcon"
import ContactForm from "@/components/organisms/ContactForm"

const ContactPage = () => {
  const location = useLocation()
  const selectedService = location.state?.selectedService || ""
  
  const contactInfo = [
    {
      icon: "Phone",
      title: "Phone",
      value: "+91 95607 85875",
      description: "Call us for immediate support"
    },
    {
      icon: "Mail",
      title: "Email",
      value: "support@techlopers.com",
      description: "Send us an email anytime"
    },
    {
      icon: "MapPin",
      title: "Offices",
      value: "India & USA",
      description: "Multiple locations to serve you"
    }
  ]
  
  const offices = [
    {
      type: "Registered Office",
      location: "South Delhi, India",
      address: "K-1292/15, Ground Floor, Sangam Vihar, South Delhi, India"
    },
    {
      type: "Corporate Office",
      location: "Noida, India",
      address: "Noida, Uttar Pradesh, India"
    },
    {
      type: "Global Office",
      location: "New York, USA",
      address: "New York, United States"
    }
  ]
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with reliable IT solutions? 
            Get in touch with our expert team today.
          </p>
        </motion.div>
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              className="bg-white rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-full p-4 w-fit mx-auto mb-4">
                <ApperIcon 
                  name={info.icon} 
                  className="h-8 w-8 text-primary-600" 
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {info.title}
              </h3>
              <p className="text-lg font-medium text-primary-600 mb-1">
                {info.value}
              </p>
              <p className="text-gray-600 text-sm">
                {info.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <ContactForm selectedService={selectedService} />
          </div>
          
          {/* Office Locations */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-6">
                Office Locations
              </h3>
              
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <motion.div
                    key={office.type}
                    className="bg-white rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg p-2 mt-1">
                        <ApperIcon 
                          name={office.type === "Global Office" ? "Globe" : "MapPin"} 
                          className="h-5 w-5 text-primary-600" 
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          {office.type}
                        </h4>
                        <p className="text-primary-600 font-medium mb-2">
                          {office.location}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {office.address}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Map Placeholder */}
            <motion.div
              className="bg-white rounded-xl p-6 card-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h4 className="font-semibold text-gray-800 mb-4">
                Find Us in Noida
              </h4>
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <ApperIcon name="Map" className="h-12 w-12 text-primary-600 mx-auto mb-2" />
                  <p className="text-gray-600">Interactive map integration</p>
                  <p className="text-sm text-gray-500">Google Maps embed would go here</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage