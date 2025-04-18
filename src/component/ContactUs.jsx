import { useState } from "react";
import { useSendmesagesMutation } from "../redux/messagesapi";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [sendMessage, { isLoading, isSuccess, isError, error }] =
    useSendmesagesMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendMessage(formData).unwrap();
      if (!isError) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (err) {
      console.error("Failed to send message:", err);
    }
  };

  return (
    <div className="mt-16 mb-8 w-full text-white py-10 px-4 md:px-8 relative overflow-hidden">
      {/* Decorative Dots */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="h-2 w-2 rounded-full bg-Blue"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col">
            <p className="text-sm mb-2 text-Blue">Contact Us</p>
            <h2 className="text-2xl font-bold text-Blue mb-4">
              💬 Live Chat: Available 24/5 for instant support during trading
              hours
            </h2>
            <p className="text-black mb-8">
              Have questions about trading, your account, or our platform? Our
              support team is here to help you every step of the way.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="border border-gray-700 rounded-lg p-2">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-Blue">Our Location</h3>
                  <p className="text-sm text-black">
                    Alhafeez executive third floor office No#10 G11 Lahore,
                    Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="border border-gray-700 rounded-lg p-2">
                  <Phone className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-Blue">Phone Number</h3>
                  <p className="text-sm text-black">(+92) 324 5338060</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="border border-gray-700 rounded-lg p-2">
                  <Mail className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-Blue">Email Address</h3>
                  <p className="text-sm text-black">
                    <span className="text-red-500">info@</span>aoneforex.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg p-6 shadow-lg z-10"
          >
            {isSuccess && (
              <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                Message sent successfully!
              </div>
            )}

            {isError && (
              <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                Error: {error?.data?.message || "Failed to send message"}
              </div>
            )}

            <div className="flex flex-col space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg px-4 py-3 text-gray-800"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="border border-gray-300 rounded-lg px-4 py-3 text-gray-800"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                className="border border-gray-300 rounded-lg px-4 py-3 text-gray-800"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                className="border border-gray-300 rounded-lg px-4 py-3 text-gray-800"
                required
              ></textarea>
              <button
                type="submit"
                disabled={isLoading}
                className={`${
                  isLoading ? "bg-gray-500" : "bg-Blue hover:bg-HoverColor"
                } text-white py-3 rounded-lg transition`}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
