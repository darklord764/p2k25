import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>Feel free to reach out to us using any of the following methods:</p>
        
        <div className="info-item">
          <Phone className="icon" />
          <div>
            <h3>Phone</h3>
            <p>+1 234 567 8900</p>
          </div>
        </div>
        
        <div className="info-item">
          <Mail className="icon" />
          <div>
            <h3>Email</h3>
            <p>contact@example.com</p>
          </div>
        </div>
        
        <div className="info-item">
          <MapPin className="icon" />
          <div>
            <h3>Address</h3>
            <p>123 Business Street<br />New York, NY 10001</p>
          </div>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Send Message</h2>
        
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          <Send className="send-icon" />
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;