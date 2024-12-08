import { Col, Row } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import './style.css'

function Contact() {
  return (
    <div className="bg-black py-20" id="contact">
      <div className="container mx-auto bg-white text-black rounded-2xl shadow-lg px-8 py-12">
        <Row className="flex flex-wrap">
          {/* Contact Form Section */}
          <Col md={6} className="flex flex-col justify-center items-start px-4">
            <h1 className="text-3xl font-bold text-green-700 mb-6">Contact Us</h1>
            <form className="w-full space-y-6">
              {/* Name Field */}
              <div className="formGroup w-full">
                <label htmlFor="name" className="text-gray-700 font-medium mb-1 block">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>
              {/* Email Field */}
              <div className="formGroup w-full">
                <label htmlFor="email" className="text-gray-700 font-medium mb-1 block">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>
              {/* Message Field */}
              <div className="formGroup w-full">
                <label htmlFor="message" className="text-gray-700 font-medium mb-1 block">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write your message here"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 h-40"
                ></textarea>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded-lg transition duration-300 w-full text-lg font-medium"
              >
                Submit
              </button>
            </form>
          </Col>

          {/* Contact Info Section */}
          <Col md={6} className="contact-us-info flex flex-col justify-center items-start px-4 mt-8 md:mt-0">
            <h2 className="text-2xl font-semibold text-green-700">Get in Touch</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Feel free to reach out to us via email or connect with us on our social platforms.
              We’re here to assist you!
            </p>
            <div className="flex space-x-8">
              {/* Email */}
              <a
                href="mailto:khankaif11107@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-green-700"
              >
                <AiOutlineMail className="text-4xl text-green-700" />
              </a>
              {/* Twitter */}
              <a
                href="https://x.com/KhanKaif07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-blue-500"
              >
                <FaTwitter className="text-4xl text-blue-500" />
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/kaif-khan-766bb426a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-blue-700"
              >
                <FaLinkedin className="text-4xl text-blue-700" />
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Contact;
