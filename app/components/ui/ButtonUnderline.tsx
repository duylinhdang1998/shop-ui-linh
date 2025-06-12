import React from 'react';

interface ButtonUnderlineProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode | string;
}

const ButtonUnderline: React.FC<ButtonUnderlineProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <button
      className={`bg-orange-500 hover:bg-orange-600 text-white rounded-[1000px] relative group ${className}`}
      {...props}
    >
      <div className="rounded-2xl relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-full before:bottom-0 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:h-[1px] after:w-0 hover:after:w-full after:bottom-0 after:left-0">
        <span>{children}</span>
      </div>
    </button>
  );
};

export default ButtonUnderline;
