import React from "react"
import { motion } from "framer-motion"
import ApperIcon from "@/components/ApperIcon"

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      className="bg-white rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300"
      whileHover={{ y: -2 }}
    >
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <ApperIcon
            key={i}
            name="Star"
            className={`h-5 w-5 ${
              i < testimonial.rating 
                ? "text-accent-500 fill-current" 
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
      
      <blockquote className="text-gray-700 mb-4 italic leading-relaxed">
        "{testimonial.quote}"
      </blockquote>
      
      <div className="flex items-center">
        <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-full h-12 w-12 flex items-center justify-center mr-4">
          <ApperIcon name="User" className="h-6 w-6 text-primary-600" />
        </div>
        <div>
          <p className="font-semibold text-gray-800">{testimonial.author}</p>
          <p className="text-sm text-gray-600">{testimonial.company}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard