import React from "react"
import { motion } from "framer-motion"
import ApperIcon from "@/components/ApperIcon"
import Button from "@/components/atoms/Button"

const Error = ({ 
  message = "Something went wrong. Please try again.", 
  onRetry = null,
  className = "" 
}) => {
  return (
    <motion.div 
      className={`flex flex-col items-center justify-center py-16 px-4 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-full p-6 mb-6">
        <ApperIcon 
          name="AlertTriangle" 
          className="h-16 w-16 text-red-500" 
        />
      </div>
      
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        Oops! Something went wrong
      </h3>
      
      <p className="text-gray-600 text-center max-w-md mb-8">
        {message}
      </p>
      
      {onRetry && (
        <Button 
          onClick={onRetry}
          variant="primary"
          className="flex items-center gap-2"
        >
          <ApperIcon name="RefreshCw" className="h-4 w-4" />
          Try Again
        </Button>
      )}
      
      <div className="mt-8 text-sm text-gray-500">
        If the problem persists, please contact our support team.
      </div>
    </motion.div>
  )
}

export default Error