import React from "react"
import HeroSection from "@/components/organisms/HeroSection"
import ServicesGrid from "@/components/organisms/ServicesGrid"
import TestimonialsSection from "@/components/organisms/TestimonialsSection"

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesGrid showAll={false} />
      <TestimonialsSection showAll={false} />
    </div>
  )
}

export default HomePage