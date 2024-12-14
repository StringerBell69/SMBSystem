import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the EmailJS API to send the email
    emailjs
      .send(
        'service_ex6z52m',
        'template_nc9q39h', 
        formData, // Form data
        'PzRRPGb0_-7wYCMUL'
      )
      .then(
        (response) => {
          setStatus('Message envoyé');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setStatus('Erreur, Merci de contacter daniel@smbsystem.me.');
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contactez-nous</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Prêt à démarrer votre projet ? Contactez-nous pour en discuter.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-blue-600 mr-4" />
              <span className="text-gray-600">daniel@smbsystem.me</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-blue-600 mr-4" />
              <span className="text-gray-600">Lyon, France</span>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.linkedin.com/in/daniel-sumbo/" className="text-gray-600 hover:text-blue-600">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://github.com/StringerBell69" className="text-gray-600 hover:text-blue-600">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Nom"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Envoyer
            </button>
            {status && <p className="text-center text-gray-600 mt-4">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
