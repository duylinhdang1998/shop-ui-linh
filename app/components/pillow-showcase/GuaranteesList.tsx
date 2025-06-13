import React from 'react';

type Guarantee = {
  icon: JSX.Element;
  text: string;
};

export const GuaranteesList: React.FC<{ guarantees: Guarantee[]; className?: string }> = ({ guarantees, className }) => {
  return (
    <div className={`flex flex-col lg:gap-4 gap-3 ${className}`}>
      {guarantees.map((guarantee, index) => (
        <div key={index} className="flex items-center gap-[2px]">
          <div className="w-8 h-8">{guarantee.icon}</div>
            <span className="font-inter font-normal lg:text-[20px] text-[14px] leading-xl tracking-[0%]">{guarantee.text}</span>
        </div>
      ))}
    </div>
  );
};
