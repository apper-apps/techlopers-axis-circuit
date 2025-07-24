import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { toast } from "react-toastify"
import ApperIcon from "@/components/ApperIcon"
import Button from "@/components/atoms/Button"
import Input from "@/components/atoms/Input"
import Label from "@/components/atoms/Label"
import Textarea from "@/components/atoms/Textarea"
import clientPortalService from "@/services/api/clientPortalService"

const ClientPortalModal = ({ isOpen, onClose }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('dashboard')
  const [tickets, setTickets] = useState([])
  
  // Login form state
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  })
  
  // New ticket form state
  const [ticketForm, setTicketForm] = useState({
    subject: '',
    description: '',
    priority: 'medium'
  })

  useEffect(() => {
    if (isOpen && isLoggedIn && currentUser) {
      loadUserTickets()
    }
  }, [isOpen, isLoggedIn, currentUser])

  const loadUserTickets = async () => {
    try {
      setLoading(true)
      const userTickets = await clientPortalService.getUserTickets(currentUser.Id)
      setTickets(userTickets)
    } catch (error) {
      toast.error('Failed to load tickets')
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    if (!loginForm.email || !loginForm.password) {
      toast.error('Please fill in all fields')
      return
    }

    try {
      setLoading(true)
      const user = await clientPortalService.login(loginForm.email, loginForm.password)
      setCurrentUser(user)
      setIsLoggedIn(true)
      setLoginForm({ email: '', password: '' })
      toast.success(`Welcome back, ${user.name}!`)
    } catch (error) {
      toast.error('Invalid credentials. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentUser(null)
    setActiveTab('dashboard')
    setTickets([])
    toast.info('Logged out successfully')
  }

  const handleCreateTicket = async (e) => {
    e.preventDefault()
    if (!ticketForm.subject || !ticketForm.description) {
      toast.error('Please fill in all required fields')
      return
    }

    try {
      setLoading(true)
      const newTicket = await clientPortalService.createTicket(currentUser.Id, ticketForm)
      setTickets(prev => [newTicket, ...prev])
      setTicketForm({ subject: '', description: '', priority: 'medium' })
      setActiveTab('tickets')
      toast.success('Support ticket created successfully!')
    } catch (error) {
      toast.error('Failed to create ticket')
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    onClose()
    // Reset states when closing
    setTimeout(() => {
      setActiveTab('dashboard')
      setLoginForm({ email: '', password: '' })
      setTicketForm({ subject: '', description: '', priority: 'medium' })
    }, 300)
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50'
      case 'medium': return 'text-yellow-600 bg-yellow-50'
      case 'low': return 'text-green-600 bg-green-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'open': return 'text-blue-600 bg-blue-50'
      case 'in-progress': return 'text-yellow-600 bg-yellow-50'
      case 'resolved': return 'text-green-600 bg-green-50'
      case 'closed': return 'text-gray-600 bg-gray-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        />
        
        {/* Modal */}
        <div className="flex min-h-full items-center justify-center p-4">
          <motion.div
            className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg p-2">
                  <ApperIcon name="Shield" className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Client Portal</h2>
                  <p className="text-sm text-gray-600">Manage your account and support tickets</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <ApperIcon name="X" className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {!isLoggedIn ? (
                // Login Form
                <div className="max-w-md mx-auto">
                  <form onSubmit={handleLogin} className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Sign In to Your Account</h3>
                      <p className="text-sm text-gray-600">Access your client dashboard and support tickets</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={loginForm.email}
                          onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="Enter your email"
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="password">Password</Label>
                        <Input
                          id="password"
                          type="password"
                          value={loginForm.password}
                          onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                          placeholder="Enter your password"
                          className="mt-1"
                        />
                      </div>
                    </div>
                    
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <ApperIcon name="Loader2" className="h-4 w-4 animate-spin" />
                      ) : (
                        <ApperIcon name="LogIn" className="h-4 w-4" />
                      )}
                      {loading ? 'Signing In...' : 'Sign In'}
                    </Button>
                    
                    <div className="text-center">
                      <p className="text-sm text-gray-600">
                        Demo credentials: admin@techlopers.com / admin123
                      </p>
                    </div>
                  </form>
                </div>
              ) : (
                // Portal Dashboard
                <div>
                  {/* User Info & Tabs */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-3 mb-4 lg:mb-0">
                      <div className="bg-primary-100 rounded-full p-3">
                        <ApperIcon name="User" className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Welcome, {currentUser?.name}</h3>
                        <p className="text-sm text-gray-600">{currentUser?.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="flex bg-gray-100 rounded-lg p-1">
                        <button
                          onClick={() => setActiveTab('dashboard')}
                          className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                            activeTab === 'dashboard' 
                              ? 'bg-white text-primary-600 shadow-sm' 
                              : 'text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          Dashboard
                        </button>
                        <button
                          onClick={() => setActiveTab('tickets')}
                          className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                            activeTab === 'tickets' 
                              ? 'bg-white text-primary-600 shadow-sm' 
                              : 'text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          Tickets
                        </button>
                        <button
                          onClick={() => setActiveTab('new-ticket')}
                          className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                            activeTab === 'new-ticket' 
                              ? 'bg-white text-primary-600 shadow-sm' 
                              : 'text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          New Ticket
                        </button>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleLogout}
                        className="flex items-center gap-2"
                      >
                        <ApperIcon name="LogOut" className="h-4 w-4" />
                        Logout
                      </Button>
                    </div>
                  </div>

                  {/* Tab Content */}
                  <div className="min-h-[400px]">
                    {activeTab === 'dashboard' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Account Overview */}
                        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <ApperIcon name="User" className="h-8 w-8 text-primary-600" />
                            <h4 className="text-lg font-semibold text-gray-900">Account</h4>
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm text-gray-600">Client ID: #{currentUser?.Id}</p>
                            <p className="text-sm text-gray-600">Member since: {currentUser?.memberSince}</p>
                            <p className="text-sm text-gray-600">Status: <span className="text-green-600 font-medium">{currentUser?.status}</span></p>
                          </div>
                        </div>

                        {/* Support Tickets */}
                        <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <ApperIcon name="Ticket" className="h-8 w-8 text-accent-600" />
                            <h4 className="text-lg font-semibold text-gray-900">Support</h4>
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm text-gray-600">Open Tickets: <span className="font-medium">{tickets.filter(t => t.status === 'open').length}</span></p>
                            <p className="text-sm text-gray-600">In Progress: <span className="font-medium">{tickets.filter(t => t.status === 'in-progress').length}</span></p>
                            <p className="text-sm text-gray-600">Total Tickets: <span className="font-medium">{tickets.length}</span></p>
                          </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <ApperIcon name="Zap" className="h-8 w-8 text-green-600" />
                            <h4 className="text-lg font-semibold text-gray-900">Quick Actions</h4>
                          </div>
                          <div className="space-y-3">
                            <button
                              onClick={() => setActiveTab('new-ticket')}
                              className="w-full text-left text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                            >
                              → Create New Ticket
                            </button>
                            <button
                              onClick={() => setActiveTab('tickets')}
                              className="w-full text-left text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                            >
                              → View All Tickets
                            </button>
                            <button
                              onClick={() => window.open('http://support.techlopers.com', '_blank')}
                              className="w-full text-left text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                            >
                              → Advanced Portal
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'tickets' && (
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <h4 className="text-lg font-semibold text-gray-900">Your Support Tickets</h4>
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => setActiveTab('new-ticket')}
                            className="flex items-center gap-2"
                          >
                            <ApperIcon name="Plus" className="h-4 w-4" />
                            New Ticket
                          </Button>
                        </div>
                        
                        {loading ? (
                          <div className="flex items-center justify-center py-12">
                            <ApperIcon name="Loader2" className="h-8 w-8 animate-spin text-primary-600" />
                          </div>
                        ) : tickets.length === 0 ? (
                          <div className="text-center py-12">
                            <ApperIcon name="Inbox" className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                            <h5 className="text-lg font-medium text-gray-900 mb-2">No tickets yet</h5>
                            <p className="text-gray-600 mb-4">Create your first support ticket to get started</p>
                            <Button
                              variant="primary"
                              onClick={() => setActiveTab('new-ticket')}
                              className="flex items-center gap-2"
                            >
                              <ApperIcon name="Plus" className="h-4 w-4" />
                              Create Ticket
                            </Button>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            {tickets.map((ticket) => (
                              <div key={ticket.Id} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200">
                                <div className="flex items-start justify-between mb-2">
                                  <h5 className="font-medium text-gray-900">#{ticket.Id} - {ticket.subject}</h5>
                                  <div className="flex items-center gap-2">
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(ticket.priority)}`}>
                                      {ticket.priority}
                                    </span>
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(ticket.status)}`}>
                                      {ticket.status}
                                    </span>
                                  </div>
                                </div>
                                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{ticket.description}</p>
                                <div className="flex items-center justify-between text-xs text-gray-500">
                                  <span>Created: {ticket.createdAt}</span>
                                  <span>Updated: {ticket.updatedAt}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {activeTab === 'new-ticket' && (
                      <div className="max-w-2xl mx-auto">
                        <form onSubmit={handleCreateTicket} className="space-y-6">
                          <div className="text-center mb-6">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Create Support Ticket</h4>
                            <p className="text-sm text-gray-600">Describe your issue and we'll get back to you soon</p>
                          </div>
                          
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="subject">Subject *</Label>
                              <Input
                                id="subject"
                                value={ticketForm.subject}
                                onChange={(e) => setTicketForm(prev => ({ ...prev, subject: e.target.value }))}
                                placeholder="Brief description of your issue"
                                className="mt-1"
                              />
                            </div>
                            
                            <div>
                              <Label htmlFor="priority">Priority</Label>
                              <select
                                id="priority"
                                value={ticketForm.priority}
                                onChange={(e) => setTicketForm(prev => ({ ...prev, priority: e.target.value }))}
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                              >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                              </select>
                            </div>
                            
                            <div>
                              <Label htmlFor="description">Description *</Label>
                              <Textarea
                                id="description"
                                value={ticketForm.description}
                                onChange={(e) => setTicketForm(prev => ({ ...prev, description: e.target.value }))}
                                placeholder="Please provide detailed information about your issue..."
                                rows={6}
                                className="mt-1"
                              />
                            </div>
                          </div>
                          
                          <div className="flex gap-3">
                            <Button
                              type="submit"
                              variant="primary"
                              disabled={loading}
                              className="flex-1 flex items-center justify-center gap-2"
                            >
                              {loading ? (
                                <ApperIcon name="Loader2" className="h-4 w-4 animate-spin" />
                              ) : (
                                <ApperIcon name="Send" className="h-4 w-4" />
                              )}
                              {loading ? 'Creating...' : 'Create Ticket'}
                            </Button>
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => setActiveTab('dashboard')}
                              className="flex items-center gap-2"
                            >
                              <ApperIcon name="ArrowLeft" className="h-4 w-4" />
                              Cancel
                            </Button>
                          </div>
                        </form>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  )
}

export default ClientPortalModal