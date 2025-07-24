import clientsData from '@/services/mockData/clients.json'

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// Mock current session storage
let currentSession = null

const clientPortalService = {
  // User authentication
  async login(email, password) {
    await delay(300)
    
    const user = clientsData.find(client => 
      client.email.toLowerCase() === email.toLowerCase() && client.password === password
    )
    
    if (!user) {
      throw new Error('Invalid credentials')
    }
    
    // Don't return password in response
    const { password: _, ...userWithoutPassword } = user
    currentSession = { ...userWithoutPassword }
    
    return currentSession
  },

  async logout() {
    await delay(200)
    currentSession = null
    return true
  },

  // Get current user session
  getCurrentUser() {
    return currentSession
  },

  // Ticket management
  async getUserTickets(userId) {
    await delay(400)
    
    if (!userId || typeof userId !== 'number') {
      throw new Error('Valid user ID required')
    }
    
    const user = clientsData.find(client => client.Id === userId)
    if (!user) {
      throw new Error('User not found')
    }
    
    return [...user.tickets].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  },

  async createTicket(userId, ticketData) {
    await delay(500)
    
    if (!userId || typeof userId !== 'number') {
      throw new Error('Valid user ID required')
    }
    
    if (!ticketData.subject || !ticketData.description) {
      throw new Error('Subject and description are required')
    }
    
    const user = clientsData.find(client => client.Id === userId)
    if (!user) {
      throw new Error('User not found')
    }
    
    // Generate new ticket ID
    const allTickets = clientsData.flatMap(client => client.tickets)
    const maxId = Math.max(...allTickets.map(ticket => ticket.Id), 0)
    const newTicketId = maxId + 1
    
    const newTicket = {
      Id: newTicketId,
      subject: ticketData.subject.trim(),
      description: ticketData.description.trim(),
      priority: ticketData.priority || 'medium',
      status: 'open',
      createdAt: new Date().toLocaleDateString(),
      updatedAt: new Date().toLocaleDateString(),
      clientId: userId
    }
    
    // Add to user's tickets (in memory)
    user.tickets.unshift(newTicket)
    
    return newTicket
  },

  async updateTicketStatus(ticketId, status) {
    await delay(300)
    
    if (!ticketId || typeof ticketId !== 'number') {
      throw new Error('Valid ticket ID required')
    }
    
    const validStatuses = ['open', 'in-progress', 'resolved', 'closed']
    if (!validStatuses.includes(status)) {
      throw new Error('Invalid status')
    }
    
    // Find ticket across all users
    let foundTicket = null
    let foundUser = null
    
    for (const user of clientsData) {
      const ticket = user.tickets.find(t => t.Id === ticketId)
      if (ticket) {
        foundTicket = ticket
        foundUser = user
        break
      }
    }
    
    if (!foundTicket) {
      throw new Error('Ticket not found')
    }
    
    foundTicket.status = status
    foundTicket.updatedAt = new Date().toLocaleDateString()
    
    return foundTicket
  },

  // Client information
  async getClientInfo(userId) {
    await delay(250)
    
    if (!userId || typeof userId !== 'number') {
      throw new Error('Valid user ID required')
    }
    
    const user = clientsData.find(client => client.Id === userId)
    if (!user) {
      throw new Error('User not found')
    }
    
    const { password: _, tickets: __, ...clientInfo } = user
    return clientInfo
  },

  // Get all clients (admin function)
  async getAllClients() {
    await delay(300)
    
    return clientsData.map(client => {
      const { password: _, ...clientWithoutPassword } = client
      return clientWithoutPassword
    })
  }
}

export default clientPortalService