import React from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button 
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 z-40 transition-all duration-300 hover:scale-110"
    >
      <Sun className="hidden dark:block w-6 h-6 text-white" />
      <Moon className="block dark:hidden w-6 h-6" />
    </button>
  );
};

export default ThemeToggle;