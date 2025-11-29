import React, { useState } from 'react';
import { MailIcon, PhoneIcon, LocationMarkerIcon, ClockIcon } from '@heroicons/react/outline';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value});
    setErrors({...errors, [e.target.name]: "" });
  };

   const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "กรุณากรอกชื่อ-นามสกุล";
    if (!formData.email) tempErrors.email = "กรุณากรอกอีเมล";
    if (!formData.phone) tempErrors.phone = "กรุณากรอกเบอร์โทรศัพท์";
    if (!formData.subject) tempErrors.subject = "กรุณาเลือกหัวข้อ";
    if (!formData.message) tempErrors.message = "กรุณากรอกข้อความ";

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      if (validate()) {
    // ส่งข้อมูล
    }
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">ติดต่อเรา📬</h1>
            <p className="text-lg text-gray-600">
              มีคำถาม? ต้องการความช่วยเหลือ? เราพร้อมให้บริการคุณ
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-pink-100 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">ข้อมูลการติดต่อ📮</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <LocationMarkerIcon className="h-6 w-6 text-viridian-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">ที่อยู่</h3>
                      <p className="text-gray-600">
                        123 ถนนหนังสือ แขวงอ่านดี<br/>
                        เขตความรู้ กรุงเทพฯ 10200
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <PhoneIcon className="h-6 w-6 text-viridian-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">โทรศัพท์</h3>
                      <p className="text-gray-600">02-123-4567</p>
                      <p className="text-gray-600">086-123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MailIcon className="h-6 w-6 text-viridian-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">อีเมล</h3>
                      <p className="text-gray-600">info@bookstore.co.th</p>
                      <p className="text-gray-600">support@bookstore.co.th</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <ClockIcon className="h-6 w-6 text-viridian-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">เวลาทำการ</h3>
                      <p className="text-gray-600">จันทร์ - ศุกร์: 9:00 - 18:00</p>
                      <p className="text-gray-600">เสาร์: 10:00 - 16:00</p>
                      <p className="text-gray-600">อาทิตย์: ปิดทำการ</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">ติดตามเรา</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-600 hover:text-viridian-600 transition-colors">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-blue-400 hover:text-viridian-600 transition-colors">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-purple-600 hover:text-viridian-600 transition-colors">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-yellow-100 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">ส่งข้อความถึงเรา📝</h2>
                
                {submitted ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                    ขอบคุณที่ติดต่อเรา! เราจะตอบกลับคุณโดยเร็วที่สุด
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          ชื่อ-นามสกุล 
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                            focus:ring-2 focus:ring-viridian-500 focus:border-transparent"/>
                          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          อีเมล 
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                            focus:ring-2 focus:ring-viridian-500 focus:border-transparent"/>
                          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          เบอร์โทรศัพท์ 
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                            focus:ring-2 focus:ring-viridian-500 focus:border-transparent"
                        />
                          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          หัวข้อ 
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                            focus:ring-2 focus:ring-viridian-500 focus:border-transparent"
                        >
                          <option value="">เลือกหัวข้อ</option>
                          <option value="general">สอบถามทั่วไป</option>
                          <option value="order">เกี่ยวกับคำสั่งซื้อ</option>
                          <option value="shipping">การจัดส่ง</option>
                          <option value="return">การคืนสินค้า</option>
                          <option value="complaint">ร้องเรียน</option>
                          <option value="suggestion">ข้อเสนอแนะ</option>
                        </select>
                        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                      </div>
                      </div>


                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        ข้อความ 
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                          focus:ring-2 focus:ring-viridian-500 focus:border-transparent resize-none"
                      ></textarea>
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>

                    <div className="flex justify-center">
                      <button type="submit"
                        className="mt-6 mb-6 px-6 py-2 bg-blue-400 text-black rounded-xl shadow hover:bg-blue-700 transition">
                          ส่งข้อความ
                      </button>
                    </div>
                  </form>
                      )}
              </div>
            </div>
          </div>
   
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
