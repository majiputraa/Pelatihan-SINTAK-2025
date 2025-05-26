import React, { useState } from 'react';
import { db } from '../Firebase';
import { collection, addDoc } from 'firebase/firestore';

function ContactFrom() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    product: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simpan data ke Firestore
      await addDoc(collection(db, "contacts"), formData);
      alert("Pesan berhasil dikirim!");
      setFormData({ name: "", email: "", subject: "", product: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8 my-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            name='name'
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="John Doe"
            required
            value={formData.name}
              onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            name='email'
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="john@example.com"
            required
            value={formData.email}
              onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Subject
          </label>
          <input
            type="text"
            name='subject'
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="How can we help you?"
            required
            value={formData.subject}
              onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">
            Product of Interest
          </label>
          <select
            name="product"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
            value={formData.product}
              onChange={handleChange}
          >
            <option value="">Select a product</option>
            <option value="product1">Product One</option>
            <option value="product2">Product Two</option>
            <option value="product3">Product Three</option>
            <option value="product4">Product Four</option>
            <option value="other">Other</option>
          </select>
        </div>


        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            name='message'
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your message here..."
            required
            value={formData.message}
              onChange={handleChange}
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-amber-800 hover:bg-amber-900 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2 transition-colors duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactFrom;
