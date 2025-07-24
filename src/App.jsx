import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { motion } from "framer-motion"
import Layout from "@/components/organisms/Layout"
import HomePage from "@/components/pages/HomePage"
import AboutPage from "@/components/pages/AboutPage"
import ServicesPage from "@/components/pages/ServicesPage"
import TestimonialsPage from "@/components/pages/TestimonialsPage"
import ContactPage from "@/components/pages/ContactPage"
import PrivacyPolicyPage from "@/components/pages/PrivacyPolicyPage"
import TermsPage from "@/components/pages/TermsPage"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </Layout>
        
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          className="z-[9999]"
        />
      </div>
    </Router>
  )
}

export default App