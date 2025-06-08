interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

export const ProcessStep = ({ number, title, description }: ProcessStepProps) => {
  return (
    <div className="text-left">
      <div className="text-left text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold mb-3 sm:mb-4 text-white">
        {number}.
      </div>
      <h3 className="text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-semibold mb-2 sm:mb-3 text-white">
        {title}
      </h3>
      <p className="text-[12px] sm:text-[13px] md:text-[14px] leading-[1.5] sm:leading-[1.6] text-white/90">
        {description}
      </p>
    </div>
  );
}; 