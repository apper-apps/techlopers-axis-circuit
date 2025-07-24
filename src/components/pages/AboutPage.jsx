import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import ApperIcon from "@/components/ApperIcon"
import OfficeCard from "@/components/molecules/OfficeCard"
import Loading from "@/components/ui/Loading"
import Error from "@/components/ui/Error"
import { officesService } from "@/services/api/officesService"

const AboutPage = () => {
  const [offices, setOffices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  const loadOffices = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await officesService.getAll()
      setOffices(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    loadOffices()
  }, [])
  
  const values = [
    {
      icon: "Shield",
      title: "Integrity",
      description: "We uphold trust in everything we do"
    },
    {
      icon: "Lightbulb",
      title: "Innovation",
      description: "We embrace emerging technology"
    },
    {
      icon: "Target",
      title: "Commitment",
      description: "We follow through, always"
    },
    {
      icon: "Users",
      title: "Collaboration",
      description: "Your success is our success"
    }
  ]
  
  const teamQuotes = [
    "Techlopers nurtures a culture of ownership and growth.",
    "We solve problems, not just complete tasks."
  ]
  
  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadOffices} />
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Empowering Business Through Technology Since 2014
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Founded in 2014 and formally incorporated under the Companies Act in 2016, 
              Techlopers Solutions Pvt. Ltd. is a full-service IT consulting and solutions 
              firm delivering excellence across software development, enterprise systems, 
              network infrastructure, and more.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ApperIcon name="Target" className="h-16 w-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              We believe in long-term partnerships and measurable impact. Our mission is to 
              empower businesses through intelligent, scalable, and secure IT solutions that 
              drive sustainable growth and competitive advantage.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-full p-4 w-fit mx-auto mb-4">
                  <ApperIcon 
                    name={value.icon} 
                    className="h-8 w-8 text-primary-600" 
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Office Presence */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Global Presence
            </h2>
            <p className="text-xl text-gray-600">
              Serving clients across India and the United States
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.Id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <OfficeCard office={office} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Culture */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Our Team Culture
            </h2>
            <p className="text-xl text-gray-600">
              What our team members say about working at Techlopers
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamQuotes.map((quote, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -2 }}
              >
                <ApperIcon name="Quote" className="h-8 w-8 text-primary-600 mb-4" />
                <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                  "{quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage