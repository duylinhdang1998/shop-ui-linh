import { ReactNode } from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  title?: string;
}

export const Section = ({ children, className = '', dark = false, title }: SectionProps) => {
  return (
    <section className={`py-25 my-10 ${dark ? 'text-white' : ''} ${className}`}>
      <div className="max-w-[1440px] mx-auto px-8">
        {title && (
          <h2 className="text-[32px] font-bold text-center mb-16 tracking-wider">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}; 