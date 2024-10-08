import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input type="text" id="name" name="name" className="w-full p-2 border border-[#8c7a6b] rounded" required />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input type="email" id="email" name="email" className="w-full p-2 border border-[#8c7a6b] rounded" required />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">Message</label>
          <textarea id="message" name="message" rows={4} className="w-full p-2 border border-[#8c7a6b] rounded" required></textarea>
        </div>
        <button type="submit" className="bg-[#8c7a6b] text-white px-6 py-2 rounded hover:bg-[#6b5a4c] transition-colors">
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact