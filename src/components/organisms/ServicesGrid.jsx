import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import ServiceCard from "@/components/molecules/ServiceCard"
import Loading from "@/components/ui/Loading"
import Error from "@/components/ui/Error"
import Empty from "@/components/ui/Empty"
import { servicesService } from "@/services/api/servicesService"

const ServicesGrid = ({ showAll = false }) => {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  
  const loadServices = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await servicesService.getAll()
      setServices(showAll ? data : data.slice(0, 6))
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    loadServices()
  }, [showAll])
  
  const handleGetQuote = (service) => {
    toast.success(`Quote request for ${service.title} - Redirecting to contact form`)
    navigate("/contact", { state: { selectedService: service.title } })
  }
  
  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadServices} />
  if (!services.length) return <Empty title="No Services Available" />
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            {showAll ? "What We Do Best" : "Key Services"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From software development to cybersecurity, we provide comprehensive 
            IT solutions tailored to your business needs.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.Id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ServiceCard
                service={service}
                onGetQuote={handleGetQuote}
              />
            </motion.div>
          ))}
        </div>
        
        {!showAll && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button
              onClick={() => navigate("/services")}
              className="text-primary-600 hover:text-primary-700 font-medium text-lg flex items-center gap-2 mx-auto transition-colors duration-200"
            >
              View All Services
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default ServicesGrid