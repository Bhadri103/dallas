import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight * 0.75) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid email is required';
      valid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      setTimeout(() => {
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        
        // Clear success message after a few seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }, 1000);
    }
  };
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold section-title mx-auto">Contact Us</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Have questions or want to discuss your specific requirements? Get in touch with our team.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="animate-on-scroll">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6">Send Us a <span className="text-red">Message</span></h3>
            
            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Your message has been sent successfully. We'll get back to you soon!</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md shadow-sm focus:ring-red focus:border-red form-input ${
                      errors.name ? 'border-red' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md shadow-sm focus:ring-red focus:border-red form-input ${
                      errors.email ? 'border-red' : 'border-gray-300'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red form-input"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red form-input"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="quote">Request a Quote</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-2 border rounded-md shadow-sm focus:ring-red focus:border-red form-input ${
                    errors.message ? 'border-red' : 'border-gray-300'
                  }`}
                  placeholder="Type your message here..."
                ></textarea>
                {errors.message && <p className="text-red text-xs mt-1">{errors.message}</p>}
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary px-6 py-3 rounded-md text-white font-medium text-center"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
          <div className="bg-gray-100 rounded-lg p-8 h-full">
            <h3 className="text-2xl font-bold mb-6">Contact <span className="text-yellow">Information</span></h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-red p-3 rounded-full mr-4">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Our Location</h4>
                  <p className="text-gray-600">
                    123 Industrial Avenue<br />
                    Sector 28, Gurugram<br />
                    Haryana 122001, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-yellow p-3 rounded-full mr-4">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone Number</h4>
                  <p className="text-gray-600">
                    +91 9876 543 210<br />
                    +91 1234 567 890
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red p-3 rounded-full mr-4">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email Address</h4>
                  <p className="text-gray-600">
                    info@mackadoplast.com<br />
                    support@mackadoplast.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-yellow p-3 rounded-full mr-4">
                  <Clock size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Working Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-bold mb-3">Find Us On Map</h4>
              <div className="h-64 bg-gray-300 rounded-lg relative overflow-hidden">
                {/* Placeholder for map - in a real implementation, you would integrate Google Maps or another mapping service */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                  <span className="text-gray-500">Interactive Map</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;