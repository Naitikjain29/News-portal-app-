import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Please fill all the fields!");
      return;
    }

    toast.success("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 to-red-800 text-white">

        <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full"></div>

        <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-black/10 rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">

          <span className="inline-block bg-white/10 border border-white/20 px-5 py-2 rounded-full text-sm font-semibold mb-5">
            📩 GET IN TOUCH
          </span>

          <h1 className="text-5xl md:text-6xl font-black mb-5">
            Contact NewsHub
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-red-100 leading-8">
            Have a question, suggestion, feedback, or news tip?
            We would love to hear from you.
          </p>

        </div>
      </section>


      {/* ================= MAIN CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* ================= CONTACT INFORMATION ================= */}
          <div className="lg:col-span-1">

            <div className="bg-gray-900 text-white rounded-3xl p-8 shadow-xl h-full">

              <h2 className="text-3xl font-black mb-4">
                Let's Talk
              </h2>

              <p className="text-gray-400 leading-7 mb-8">
                We are always happy to hear from our readers. Contact us or feedback, suggestions, partnerships, or general inquiries.
              </p>


              {/* Email */}
              <div className="flex items-start gap-4 mb-7">

                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-red-600 rounded-xl text-xl">
                  ✉️
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Email
                  </h3>

                  <p className="text-gray-400">
                    contact@newshub.com
                  </p>
                </div>

              </div>


              {/* Phone */}
              <div className="flex items-start gap-4 mb-7">

                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-red-600 rounded-xl text-xl">
                  📞
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Phone
                  </h3>

                  <p className="text-gray-400">
                    +91 797XXXXXXX
                  </p>
                </div>

              </div>


              {/* Location */}
              <div className="flex items-start gap-4 mb-7">

                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-red-600 rounded-xl text-xl">
                  📍
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Location
                  </h3>

                  <p className="text-gray-400">
                    India
                  </p>
                </div>

              </div>


              {/* Working Hours */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-red-600 rounded-xl text-xl">
                  🕒
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Working Hours
                  </h3>

                  <p className="text-gray-400">
                    Monday - Friday
                  </p>

                  <p className="text-gray-400">
                    9:00 AM - 6:00 PM
                  </p>
                </div>

              </div>


              {/* Social Media */}
              <div className="border-t border-gray-700 mt-10 pt-7">

                <h3 className="font-bold mb-4">
                  Follow Us
                </h3>

                <div className="flex gap-3">

                  <a
                    href="#"
                    className="w-11 h-11 flex items-center justify-center bg-gray-800 rounded-xl hover:bg-red-600 transition"
                  >
                    f
                  </a>

                  <a
                    href="#"
                    className="w-11 h-11 flex items-center justify-center bg-gray-800 rounded-xl hover:bg-red-600 transition"
                  >
                    𝕏
                  </a>

                  <a
                    href="#"
                    className="w-11 h-11 flex items-center justify-center bg-gray-800 rounded-xl hover:bg-red-600 transition"
                  >
                    ◎
                  </a>

                  <a
                    href="#"
                    className="w-11 h-11 flex items-center justify-center bg-gray-800 rounded-xl hover:bg-red-600 transition"
                  >
                    in
                  </a>

                </div>

              </div>

            </div>

          </div>


          {/* ================= CONTACT FORM ================= */}
          <div className="lg:col-span-2">

            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl">

              <div className="mb-8">

                <span className="text-red-600 font-bold uppercase tracking-widest text-sm">
                  Send Message
                </span>

                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
                  Get In Touch With Us
                </h2>

                <p className="text-gray-500 mt-3">
                  Fill out the form below and our team will get back to you.
                </p>

              </div>


              <form onSubmit={handleSubmit}>

                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">

                  <div>
                    <label className="block font-bold text-gray-700 mb-2">
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition"
                    />
                  </div>


                  <div>
                    <label className="block font-bold text-gray-700 mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition"
                    />
                  </div>

                </div>


                {/* Subject */}
                <div className="mb-6">

                  <label className="block font-bold text-gray-700 mb-2">
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is your message about?"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition"
                  />

                </div>


                {/* Message */}
                <div className="mb-6">

                  <label className="block font-bold text-gray-700 mb-2">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="7"
                    placeholder="Write your message here..."
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none resize-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition"
                  ></textarea>

                </div>


                {/* Submit */}
                <button
                  type="submit"
                  className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-red-200 hover:-translate-y-1 transition-all duration-300"
                >
                  Send Message →
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* ================= WHY CONTACT US ================= */}
      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <span className="text-red-600 font-bold uppercase tracking-widest text-sm">
              We Are Here For You
            </span>

            <h2 className="text-4xl font-black text-gray-900 mt-3">
              How Can We Help?
            </h2>

          </div>


          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-gray-50 rounded-2xl p-7 text-center border border-gray-100 hover:border-red-300 hover:shadow-lg transition">

              <div className="text-5xl mb-5">
                💡
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Suggestions
              </h3>

              <p className="text-gray-500 leading-7">
                Have an idea to improve NewsHub? Share your suggestions
                with us.
              </p>

            </div>


            <div className="bg-gray-50 rounded-2xl p-7 text-center border border-gray-100 hover:border-red-300 hover:shadow-lg transition">

              <div className="text-5xl mb-5">
                📰
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                News Tips
              </h3>

              <p className="text-gray-500 leading-7">
                Know an important story? Send us your news tips and
                information.
              </p>

            </div>


            <div className="bg-gray-50 rounded-2xl p-7 text-center border border-gray-100 hover:border-red-300 hover:shadow-lg transition">

              <div className="text-5xl mb-5">
                🤝
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Partnerships
              </h3>

              <p className="text-gray-500 leading-7">
                Interested in working with NewsHub? Contact our team for
                partnership opportunities.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="bg-white text-black py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <div className="text-5xl mb-5">
            📰
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-5">
            Stay Connected With NewsHub
          </h2>

          <p className="text-gray-400 text-lg leading-8">
            Your feedback helps us build a better news experience.
            Don't hesitate to reach out.
          </p>

        </div>

      </section>

    </div>
  );
};

export default Contact;