interface ImpactCardProps {
  image: string;
  title: string;
  description: string;
  className?: string;
}

export const ImpactCard = ({ image, title, description, className = '' }: ImpactCardProps) => {
  return (
    <div className={`text-center ${className}`}>
      <div className="w-[60vw] h-[60vw] max-w-[250px] max-h-[250px] sm:w-[40vw] sm:h-[40vw] sm:max-w-[180px] sm:max-h-[180px] md:w-[25vw] md:h-[25vw] md:max-w-[200px] md:max-h-[200px] lg:w-[15vw] lg:h-[15vw] lg:max-w-[220px] lg:max-h-[220px] mx-auto mb-4 sm:mb-5 md:mb-6">
        <img
          src={`/${image}`}
          alt={title}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <h3 className="text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-semibold mb-2 sm:mb-3 text-[#333333] leading-tight">
        {title}
      </h3>
      <p className="text-[10px] sm:text-[12px] md:text-[13px] lg:text-[14px] leading-[1.4] sm:leading-[1.5] md:leading-[1.6] text-[#666666]">
        {description}
      </p>
    </div>
  );
}; 