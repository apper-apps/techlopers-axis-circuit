import officesData from "@/services/mockData/offices.json"

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const officesService = {
  async getAll() {
    await delay(200)
    return [...officesData]
  },

  async getById(id) {
    await delay(150)
    const office = officesData.find(item => item.Id === parseInt(id))
    if (!office) {
      throw new Error("Office not found")
    }
    return { ...office }
  },

  async create(officeData) {
    await delay(400)
    const newId = Math.max(...officesData.map(item => item.Id)) + 1
    const newOffice = {
      Id: newId,
      ...officeData,
      createdAt: new Date().toISOString()
    }
    officesData.push(newOffice)
    return { ...newOffice }
  },

  async update(id, updateData) {
    await delay(350)
    const index = officesData.findIndex(item => item.Id === parseInt(id))
    if (index === -1) {
      throw new Error("Office not found")
    }
    officesData[index] = { ...officesData[index], ...updateData }
    return { ...officesData[index] }
  },

  async delete(id) {
    await delay(300)
    const index = officesData.findIndex(item => item.Id === parseInt(id))
    if (index === -1) {
      throw new Error("Office not found")
    }
    const deletedOffice = { ...officesData[index] }
    officesData.splice(index, 1)
    return deletedOffice
  }
}