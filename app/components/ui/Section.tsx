import { ReactNode } from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  title?: string;
}

export const Section = ({ children, className = '', dark = false, title }: SectionProps) => {
  return (
    <section className={`my-6 md:my-[66px] ${dark ? 'text-white' : ''} ${className}`}>
      <div className="max-w-[var(--max-width-container-xl)] mx-auto lg:px-[64px] px-[12px] rounded-2xl">
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