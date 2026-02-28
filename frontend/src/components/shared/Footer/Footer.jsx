import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10 mb-12">

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              TaskFlow
            </h2>
            <p className="text-sm text-gray-400">
              A modern productivity app built with the MERN stack.
              Secure, fast, and scalable task management.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Product
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Connect
            </h3>
            <div className="flex gap-4">
              <a href="#"><Github size={20} /></a>
              <a href="#"><Linkedin size={20} /></a>
              <a href="#"><Twitter size={20} /></a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} TaskFlow. All rights reserved.
          </p>
          <p className="mt-3 md:mt-0">
            Built with ❤️ using MERN Stack
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;