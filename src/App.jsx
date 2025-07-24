import React, { useState } from "react"
import { ToastContainer } from "react-toastify"
import Layout from "@/components/organisms/Layout"
import HomePage from "@/components/pages/HomePage"
import ClientPortalModal from "@/components/organisms/ClientPortalModal"

function App() {
  const [isClientPortalOpen, setIsClientPortalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Layout onClientPortalOpen={() => setIsClientPortalOpen(true)}>
        <HomePage onClientPortalOpen={() => setIsClientPortalOpen(true)} />
      </Layout>
      
      <ClientPortalModal 
        isOpen={isClientPortalOpen}
        onClose={() => setIsClientPortalOpen(false)}
      />
      
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
  )
}

export default App