import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-purple hover:bg-[#5b21b6] text-white shadow-[0_0_15px_rgba(108,43,217,0.4)] hover:shadow-[0_0_25px_rgba(108,43,217,0.6)] border border-brand-purple",
    secondary: "bg-white text-black hover:bg-gray-200 border border-white",
    outline: "bg-transparent border-2 border-brand-purple text-brand-purple hover:bg-brand-purple/10",
    ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};