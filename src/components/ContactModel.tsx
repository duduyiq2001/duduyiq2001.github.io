import React, { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:duyiqundean@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `From: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div
        className="bg-card-bg rounded-xl p-6 w-full max-w-md border border-neon-pink/20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-neon-pink">Contact Me</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-neon-pink transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-dark-bg rounded-lg border border-neon-pink/20 p-2 text-white 
                       focus:border-neon-pink focus:ring-1 focus:ring-neon-pink outline-none
                       transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-dark-bg rounded-lg border border-neon-pink/20 p-2 text-white 
                       focus:border-neon-pink focus:ring-1 focus:ring-neon-pink outline-none
                       transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-gray-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="w-full bg-dark-bg rounded-lg border border-neon-pink/20 p-2 text-white 
                       focus:border-neon-pink focus:ring-1 focus:ring-neon-pink outline-none
                       transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-dark-bg rounded-lg border border-neon-pink/20 p-2 text-white 
                       focus:border-neon-pink focus:ring-1 focus:ring-neon-pink outline-none
                       transition-colors min-h-[120px]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-neon-pink text-white py-2 rounded-lg hover:bg-opacity-90 
                     transition-colors button-glow"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
