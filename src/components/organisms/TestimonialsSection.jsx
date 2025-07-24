import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import TestimonialCard from "@/components/molecules/TestimonialCard"
import Loading from "@/components/ui/Loading"
import Error from "@/components/ui/Error"
import Empty from "@/components/ui/Empty"
import { testimonialsService } from "@/services/api/testimonialsService"

const TestimonialsSection = ({ showAll = false }) => {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  const loadTestimonials = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await testimonialsService.getAll()
      setTestimonials(showAll ? data : data.slice(0, 3))
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    loadTestimonials()
  }, [showAll])
  
  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadTestimonials} />
  if (!testimonials.length) return <Empty title="No Testimonials Available" />
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Hear It From Our Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what our satisfied clients 
            have to say about our IT solutions and services.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.Id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection