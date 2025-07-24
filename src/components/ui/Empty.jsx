import React from "react"
import { motion } from "framer-motion"
import ApperIcon from "@/components/ApperIcon"
import Button from "@/components/atoms/Button"

const Empty = ({ 
  title = "No data available",
  message = "There's nothing here yet, but that's about to change!",
  actionLabel = "Get Started",
  onAction = null,
  icon = "FileText",
  className = "" 
}) => {
  return (
    <motion.div 
      className={`flex flex-col items-center justify-center py-16 px-4 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-full p-8 mb-6">
        <ApperIcon 
          name={icon} 
          className="h-20 w-20 text-primary-500" 
        />
      </div>
      
      <h3 className="text-2xl font-bold gradient-text mb-3">
        {title}
      </h3>
      
      <p className="text-gray-600 text-center max-w-md mb-8 leading-relaxed">
        {message}
      </p>
      
      {onAction && (
        <Button 
          onClick={onAction}
          variant="primary"
          className="flex items-center gap-2 px-6 py-3"
        >
          <ApperIcon name="Plus" className="h-4 w-4" />
          {actionLabel}
        </Button>
      )}
      
      <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <ApperIcon name="Shield" className="h-4 w-4" />
          Secure
        </div>
        <div className="flex items-center gap-1">
          <ApperIcon name="Zap" className="h-4 w-4" />
          Fast
        </div>
        <div className="flex items-center gap-1">
          <ApperIcon name="Users" className="h-4 w-4" />
          Reliable
        </div>
      </div>
    </motion.div>
  )
}

export default Empty