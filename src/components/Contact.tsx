import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Globe,
  Award,
  Users,
  Factory,
  FlaskConical,
  Building,
  CheckSquare,
} from "lucide-react"; // Added necessary icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        // Ensure el is an Element before calling getBoundingClientRect
        if (el instanceof Element) {
          const rect = el.getBoundingClientRect();
          const windowHeight =
            window.innerHeight || document.documentElement.clientHeight;

          if (rect.top <= windowHeight * 0.75) {
            el.classList.add("visible");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Use type assertion for errors if necessary, or ensure name is a key of errors
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Valid email is required";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate form submission
      console.log("Form data submitted:", formData); // In a real app, send to backend
      setSubmitStatus("success");
      setFormData({
        // Reset form
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        // Clear success message
        setSubmitStatus(null);
      }, 5000);
    } else {
      setSubmitStatus("error");
      setTimeout(() => {
        // Optionally clear error status
        setSubmitStatus(null);
      }, 5000);
    }
  };

  const businessInquirySubjects = [
    { value: "sales", label: "Product Sales & Pricing" },
    { value: "support", label: "Technical Support" },
    { value: "dealership", label: "Dealership Inquiry" },
    { value: "consultation", label: "Project Consultation" },
    { value: "general", label: "General Inquiry" },
    { value: "other", label: "Other" },
  ];

  const serviceAreasList = [
    { area: "Kerala", detail: "Thiruvananthapuram to Kannur" },
    { area: "Karnataka", detail: "Statewide coverage" },
    { area: "Tamil Nadu", detail: "Complete state coverage" },
  ];

  const certificationsAndCommitment = [
    {
      icon: Award,
      title: "ISO 9001:2015 Certified",
      description:
        "Recognized for quality management and continuous process improvement.",
    },
    {
      icon: CheckSquare,
      title: "Backed by KKM Green",
      description:
        "Supported by a trusted leader in sustainable construction solutions.",
    },
    {
      icon: FlaskConical,
      title: "McGlasgo Research Centre",
      description:
        "Strategic partnership enabling cutting-edge research and development.",
    },
    {
      icon: Users,
      title: "World-renowned Scientific Team",
      description:
        "Collaborating with top minds in construction material science.",
    },
    {
      icon: Factory,
      title: "Automated Manufacturing Facility",
      description:
        "Equipped with industry-leading machinery near Coimbatore, Tamil Nadu.",
    },
    {
      icon: Building,
      title: "In-house Testing Laboratories",
      description:
        "Strict quality control with advanced in-house lab testing procedures.",
    },
  ];

  return (
    <div className="bg-gray-50 ">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-5">
            Get in Touch with
            <span className="text-red-600"> Dallas Wallcare</span>
          </h2>
         <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Have questions or need help? We're here for you.
            </p>
         
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="animate-on-scroll bg-white rounded-xl shadow-xl p-8 h-full order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-6 text-gray-700">
              Contact Information
            </h3>
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-100 p-3 rounded-full mr-4">
                  <MapPin size={22} className="text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Head Office & Manufacturing
                  </h4>
                  <p className="text-gray-600">
                    Dallas Wallcare Pvt. Ltd.
                    <br />
                    No 1/394, S.F.NO. 436/B1, VADUGAPALAYAM
                    <br />
                    Vadampacheri, Coimbatore - 641669
                    <br />
                    Tamil Nadu, India
                    <br />
                    <b>GSTIN: </b>33AAICD2314F1Z7
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-100 p-3 rounded-full mr-4">
                  <Phone size={22} className="text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                  <p className="text-gray-600 hover:text-red-600">
                    Mobile: +91 9342216880
                    <br />
                    Toll Free: 1800 572 4998
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-100 p-3 rounded-full mr-4">
                  <Mail size={22} className="text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600 hover:text-red-600">
                    info@dallaswallcare.com
                    <br />
                    magesh@mcglasgo.com
                  </p>
                </div>
              </div>
              {/* 
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-100 p-3 rounded-full mr-4">
                  <Globe size={22} className="text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Website</h4>
                  <p className="text-gray-600 hover:text-red-600">
                    www.dallaswallcare.com
                  </p>
                </div>
              </div> */}

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-100 p-3 rounded-full mr-4">
                  <Clock size={22} className="text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Working Hours
                  </h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 2:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-on-scroll bg-white rounded-xl shadow-xl p-8 h-full order-1 lg:order-2">
            <h3 className="text-2xl font-bold mb-2 text-gray-700">
              Send Us a Message
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Reach out for sales, support, or project inquiries.
            </p>

            {submitStatus === "success" && (
              <div
                className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded-md"
                role="alert"
              >
                <p className="font-bold">Success!</p>
                <p>Your message has been sent. We'll get back to you soon.</p>
              </div>
            )}
            {submitStatus === "error" &&
              !Object.values(errors).some((error) => error) && (
                <div
                  className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-md"
                  role="alert"
                >
                  <p className="font-bold">Error</p>
                  <p>
                    Could not send message. Please ensure all fields are correct
                    or try again later.
                  </p>
                </div>
              )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 bg-white"
                  >
                    <option value="">Select a subject</option>
                    {businessInquirySubjects.map((subject) => (
                      <option key={subject.value} value={subject.value}>
                        {subject.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-2.5 border rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Type your message here... (min. 10 characters)"
                ></textarea>
                {errors.message && (
                  <p className="text-red-600 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <section>
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
              Find Us On Map
            </h2>

            <div className="h-64 bg-gray-200 rounded-lg relative overflow-hidden shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.42208563625!2d76.88280900207503!3d11.014126784083692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c1b93a2e28a7!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" // Example: Coimbatore
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dallas Wallcare Location Map (Illustrative: Coimbatore)"
              ></iframe>
            </div>
          </div>
        </section>
        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Our Service Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceAreasList.map((item, index) => (
              <div
                key={index}
                className="animate-on-scroll bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <Globe className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {item.area}
                </h3>
                <p className="text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Our Certifications & Commitment
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
            At Dallas Wallcare, quality and innovation drive everything we do.
            Our certifications and partnerships reflect our commitment to
            excellence, sustainability, and scientific advancement in
            construction materials.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificationsAndCommitment.map((item, index) => (
              <div
                key={index}
                className="animate-on-scroll bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <item.icon className="w-10 h-10 text-red-600 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
