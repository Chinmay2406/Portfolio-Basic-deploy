import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-4">Chinmay Pramod Deshmukh</h1>
      <div className="flex justify-center space-x-4">
        <a href="mailto:chinmaydeshmukh203@gmail.com" className="flex items-center hover:text-blue-600">
          <Mail className="w-5 h-5 mr-2" />
          Email
        </a>
        <a href="https://github.com/Chinmay2406" className="flex items-center hover:text-blue-600">
          <Github className="w-5 h-5 mr-2" />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/chinmay-deshmukh-0652a2219/" className="flex items-center hover:text-blue-600">
          <Linkedin className="w-5 h-5 mr-2" />
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Header;