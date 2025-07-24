import React from "react"
import { motion } from "framer-motion"
import ApperIcon from "@/components/ApperIcon"
import Button from "@/components/atoms/Button"

const ServiceCard = ({ service, onGetQuote }) => {
  return (
    <motion.div
      className="bg-white rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300"
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg p-3 w-fit mb-4">
        <ApperIcon 
          name={service.icon} 
          className="h-8 w-8 text-primary-600" 
        />
      </div>
      
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        {service.title}
      </h3>
      
      <p className="text-gray-600 mb-4 leading-relaxed">
        {service.description}
      </p>
      
      {service.techStack && (
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-700 mb-2">Tech Stack:</p>
          <p className="text-sm text-primary-600">{service.techStack}</p>
        </div>
      )}
      
      <Button
        variant="outline"
        size="md"
        className="w-full"
        onClick={() => onGetQuote(service)}
      >
        Get a Quote
      </Button>
    </motion.div>
  )
}

export default ServiceCard