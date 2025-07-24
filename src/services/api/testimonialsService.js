import testimonialsData from "@/services/mockData/testimonials.json"

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const testimonialsService = {
  async getAll() {
    await delay(250)
    return [...testimonialsData]
  },

  async getById(id) {
    await delay(200)
    const testimonial = testimonialsData.find(item => item.Id === parseInt(id))
    if (!testimonial) {
      throw new Error("Testimonial not found")
    }
    return { ...testimonial }
  },

  async create(testimonialData) {
    await delay(400)
    const newId = Math.max(...testimonialsData.map(item => item.Id)) + 1
    const newTestimonial = {
      Id: newId,
      ...testimonialData,
      createdAt: new Date().toISOString()
    }
    testimonialsData.push(newTestimonial)
    return { ...newTestimonial }
  },

  async update(id, updateData) {
    await delay(350)
    const index = testimonialsData.findIndex(item => item.Id === parseInt(id))
    if (index === -1) {
      throw new Error("Testimonial not found")
    }
    testimonialsData[index] = { ...testimonialsData[index], ...updateData }
    return { ...testimonialsData[index] }
  },

  async delete(id) {
    await delay(300)
    const index = testimonialsData.findIndex(item => item.Id === parseInt(id))
    if (index === -1) {
      throw new Error("Testimonial not found")
    }
    const deletedTestimonial = { ...testimonialsData[index] }
    testimonialsData.splice(index, 1)
    return deletedTestimonial
  }
}