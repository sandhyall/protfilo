'use client';
import { Button, Form, Input } from '@heroui/react';
import React from 'react';
import { CgMail } from "react-icons/cg";
import { CiPhone } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from '@emailjs/browser';

const PageContactUs = () => {
  
      

  return (
    <div className=" px-4 py-12 sm:py-16 lg:py-20 max-w-8xl bg-gray-300">
      <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Have a project in mind? Lets create something amazing together.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 bg-white rounded-2xl shadow-lg p-8 sm:p-12">
        {/* Contact Information Section */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Lets Talk
            </h2>
            <p className="mt-3 text-gray-600">
              Im available for new projects and collaborations. Reach out anytime - 
              typically respond within 24 hours.
            </p>
          </div>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-start gap-4">
              <CgMail size={24} className="flex-shrink-0 text-orange-500 mt-1" />
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Email Address</h3>
                <a
                  href="mailto:sandhyadahal@gmail.com"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  sandhyadahal@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <CiPhone size={24} className="flex-shrink-0 text-orange-500 mt-1" />
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Phone Number</h3>
                <a
                  href="tel:+9779766545136"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  +977 976 654 5136
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <FaLocationDot size={24} className="flex-shrink-0 text-orange-500 mt-1" />
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Office Location</h3>
                <p className="text-gray-600">Kathmandu, Nepal</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <Form className="space-y-6">
          <div className="space-y-6">
            {/* Full Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                isRequired
                errorMessage="Please enter your full name"
                className="w-full mt-1 focus:ring-2 focus:ring-orange-500 border-gray-300 rounded-lg shadow-sm"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2 text-black">
              <label htmlFor="email" className="block text-sm font-medium text-black">
                Email Address <span className="text-red-500">*</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                isRequired
                errorMessage="Please enter a valid email address"
                className="w-full mt-1 focus:ring-2 focus:ring-orange-500 border-gray-300 rounded-lg shadow-sm"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message <span className="text-red-500">*</span>
              </label>
              <Input
                id="message"
                name="message"
                type="textarea"
                placeholder="How can I help you?"
                isRequired
                errorMessage="Please enter your message"
                minRows={5}
                className="w-full mt-1 focus:ring-2 focus:ring-orange-500 border-gray-300 rounded-lg shadow-sm resize-none"
              />
            </div>
          </div>

          <Button
            type="submit"
            color="primary"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-sm"
          >
            Send Message
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default PageContactUs;