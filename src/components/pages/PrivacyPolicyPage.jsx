import React from "react"
import { motion } from "framer-motion"
import ApperIcon from "@/components/ApperIcon"

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-white rounded-xl p-8 card-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-full p-4 w-fit mx-auto mb-4">
              <ApperIcon name="Shield" className="h-12 w-12 text-primary-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect only the information necessary to deliver and support our services. 
                This includes contact information, project requirements, and technical specifications 
                that you provide when requesting our services.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                How We Use Your Information
              </h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <ApperIcon name="Check" className="h-5 w-5 text-primary-600 mt-0.5" />
                  <p className="text-gray-700">To provide and maintain our IT services</p>
                </div>
                <div className="flex items-start space-x-3">
                  <ApperIcon name="Check" className="h-5 w-5 text-primary-600 mt-0.5" />
                  <p className="text-gray-700">To communicate with you about projects and support</p>
                </div>
                <div className="flex items-start space-x-3">
                  <ApperIcon name="Check" className="h-5 w-5 text-primary-600 mt-0.5" />
                  <p className="text-gray-700">To improve our services and customer experience</p>
                </div>
                <div className="flex items-start space-x-3">
                  <ApperIcon name="Check" className="h-5 w-5 text-primary-600 mt-0.5" />
                  <p className="text-gray-700">To comply with legal obligations</p>
                </div>
              </div>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All client data is encrypted, stored securely, and handled with the highest level 
                of confidentiality. We implement industry-standard security measures to protect 
                your information from unauthorized access, disclosure, or misuse.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Information Sharing
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We never share, sell, or rent your personal information to third parties. 
                Your data may only be shared with our team members who need access to 
                provide you with our services, and they are bound by strict confidentiality agreements.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Your Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to access, update, or delete your personal information at any time. 
                If you have any questions about our privacy practices or would like to exercise 
                these rights, please contact us at support@techlopers.com.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-700">Email: support@techlopers.com</p>
                <p className="text-gray-700">Phone: +91 95607 85875</p>
                <p className="text-gray-700">Address: Noida, India</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage