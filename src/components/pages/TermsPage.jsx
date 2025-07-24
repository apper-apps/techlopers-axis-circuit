import React from "react"
import { motion } from "framer-motion"
import ApperIcon from "@/components/ApperIcon"

const TermsPage = () => {
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
              <ApperIcon name="FileText" className="h-12 w-12 text-primary-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Terms of Use
            </h1>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Agreement to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using the services provided by Techlopers Solutions Pvt. Ltd., 
                you agree to be bound by these Terms of Use and our Privacy Policy. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Service Agreement
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All services provided by Techlopers Solutions are subject to a separate 
                client service agreement. The specific terms, deliverables, timelines, 
                and pricing will be outlined in individual project contracts.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Client Portal Access
              </h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <ApperIcon name="Key" className="h-5 w-5 text-primary-600 mt-0.5" />
                  <p className="text-gray-700">
                    Access to our client portal is provided only to authorized clients
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <ApperIcon name="Shield" className="h-5 w-5 text-primary-600 mt-0.5" />
                  <p className="text-gray-700">
                    You are responsible for maintaining the confidentiality of your login credentials
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <ApperIcon name="AlertTriangle" className="h-5 w-5 text-primary-600 mt-0.5" />
                  <p className="text-gray-700">
                    Unauthorized access or sharing of portal credentials is strictly prohibited
                  </p>
                </div>
              </div>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All intellectual property rights in our services, software, and materials 
                remain with Techlopers Solutions unless explicitly transferred through 
                a written agreement. Client-specific work products will be governed by 
                the terms of individual service contracts.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Techlopers Solutions provides services on an "as-is" basis. 
                While we strive for excellence, we cannot guarantee uninterrupted service 
                or complete error-free operation. Our liability is limited to the extent 
                permitted by applicable law.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Termination
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Either party may terminate services with appropriate notice as specified 
                in individual service agreements. Unauthorized use of our portal or 
                violation of these terms may result in immediate termination of access.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Governing Law
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These terms are governed by the laws of India. Any disputes will be 
                resolved through appropriate legal channels in the jurisdiction where 
                our registered office is located.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions about these Terms of Use, please contact us:
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-700">Email: support@techlopers.com</p>
                <p className="text-gray-700">Phone: +91 95607 85875</p>
                <p className="text-gray-700">Address: K-1292/15, Ground Floor, Sangam Vihar, South Delhi, India</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TermsPage