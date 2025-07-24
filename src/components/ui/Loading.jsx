import React from "react"
import { motion } from "framer-motion"

const Loading = ({ className = "" }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {/* Hero Section Skeleton */}
      <div className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="h-12 bg-gray-300 rounded-lg w-3/4 mx-auto mb-6"></div>
            <div className="h-6 bg-gray-300 rounded w-2/3 mx-auto mb-4"></div>
            <div className="h-6 bg-gray-300 rounded w-1/2 mx-auto mb-8"></div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="h-12 bg-gray-300 rounded-lg w-40"></div>
              <div className="h-12 bg-gray-300 rounded-lg w-40"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid Skeleton */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-10 bg-gray-300 rounded w-1/3 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                className="bg-white rounded-xl p-6 card-shadow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: item * 0.1 }}
              >
                <div className="h-12 w-12 bg-gray-300 rounded-lg mb-4"></div>
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
                <div className="space-y-2 mb-6">
                  <div className="h-4 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-300 rounded w-4/6"></div>
                </div>
                <div className="h-10 bg-gray-300 rounded-lg w-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading