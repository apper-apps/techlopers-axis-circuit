import React, { useState } from "react"
import { motion } from "framer-motion"
import { toast } from "react-toastify"
import FormField from "@/components/molecules/FormField"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"
import { contactService } from "@/services/api/contactService"

const ContactForm = ({ selectedService = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: selectedService ? `I'm interested in ${selectedService}. ` : ""
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required"
    } else if (!/^[\+]?[\d\s\-\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid"
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast.error("Please fix the errors in the form")
      return
    }
    
    try {
      setIsSubmitting(true)
      await contactService.create(formData)
      
      toast.success("Thank you! Your message has been sent successfully. We'll get back to you soon.")
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      })
      setErrors({})
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }
  
  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }))
    }
  }
  
  return (
    <motion.div
      className="bg-white rounded-xl p-8 card-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold gradient-text mb-2">Get In Touch</h3>
        <p className="text-gray-600">
          Ready to transform your business with reliable IT solutions? 
          Let's discuss your requirements.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormField
          label="Full Name"
          required
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          error={errors.name}
          placeholder="Enter your full name"
        />
        
        <FormField
          label="Email Address"
          type="email"
          required
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          error={errors.email}
          placeholder="Enter your email address"
        />
        
        <FormField
          label="Phone Number"
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          error={errors.phone}
          placeholder="Enter your phone number"
        />
        
        <FormField
          label="Message"
          multiline
          required
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          error={errors.message}
          placeholder="Tell us about your project requirements..."
          rows={4}
        />
        
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full flex items-center justify-center gap-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <ApperIcon name="Loader2" className="h-5 w-5 animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              <ApperIcon name="Send" className="h-5 w-5" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </motion.div>
  )
}

export default ContactForm