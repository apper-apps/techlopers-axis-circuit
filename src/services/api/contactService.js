const contactSubmissions = []

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const contactService = {
  async getAll() {
    await delay(200)
    return [...contactSubmissions]
  },

  async getById(id) {
    await delay(150)
    const submission = contactSubmissions.find(item => item.Id === parseInt(id))
    if (!submission) {
      throw new Error("Contact submission not found")
    }
    return { ...submission }
  },

  async create(contactData) {
    await delay(500)
    const newId = contactSubmissions.length > 0 
      ? Math.max(...contactSubmissions.map(item => item.Id)) + 1 
      : 1
    
    const newSubmission = {
      Id: newId,
      ...contactData,
      timestamp: new Date().toISOString(),
      status: "new"
    }
    
    contactSubmissions.push(newSubmission)
    return { ...newSubmission }
  },

  async update(id, updateData) {
    await delay(350)
    const index = contactSubmissions.findIndex(item => item.Id === parseInt(id))
    if (index === -1) {
      throw new Error("Contact submission not found")
    }
    contactSubmissions[index] = { ...contactSubmissions[index], ...updateData }
    return { ...contactSubmissions[index] }
  },

  async delete(id) {
    await delay(300)
    const index = contactSubmissions.findIndex(item => item.Id === parseInt(id))
    if (index === -1) {
      throw new Error("Contact submission not found")
    }
    const deletedSubmission = { ...contactSubmissions[index] }
    contactSubmissions.splice(index, 1)
    return deletedSubmission
  }
}