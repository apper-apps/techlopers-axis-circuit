import React from "react"
import { motion } from "framer-motion"
import ApperIcon from "@/components/ApperIcon"

const OfficeCard = ({ office }) => {
  return (
    <motion.div
      className="bg-white rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300"
      whileHover={{ y: -2 }}
    >
      <div className="flex items-center mb-4">
        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg p-2 mr-3">
          <ApperIcon 
            name={office.type === "Global" ? "Globe" : "MapPin"} 
            className="h-6 w-6 text-primary-600" 
          />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">{office.type} Office</h3>
          <p className="text-sm text-gray-600">{office.location}</p>
        </div>
      </div>
      
      <p className="text-gray-700 text-sm leading-relaxed">
        {office.address}
      </p>
    </motion.div>
  )
}

export default OfficeCard