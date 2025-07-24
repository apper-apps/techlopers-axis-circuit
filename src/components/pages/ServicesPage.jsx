import React from "react"
import ServicesGrid from "@/components/organisms/ServicesGrid"

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <ServicesGrid showAll={true} />
    </div>
  )
}

export default ServicesPage