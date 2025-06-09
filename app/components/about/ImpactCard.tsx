interface ImpactCardProps {
  image: string;
  title: string;
  description: string;
  className?: string;
}

export const ImpactCard = ({
  image,
  title,
  description,
  className = '',
}: ImpactCardProps) => {
  return (
    <div className={`text-center ${className} flex flex-col gap-y-8 xl:gap-y-16`}>
      <div className=" rounded-full flex justify-center items-center">
        <img
          src={`/${image}`}
          alt={title}
          className="w-[342px] h-[342px] xl:w-full xl:h-[440px] object-contain rounded-full"
        />
      </div>
      <div className="flex flex-col gap-y-[10px]">
        <span className='text-base xl:text-2xl text-neutral-5 xl:leading-8 font-medium'>
          {title}
        </span>
        <span className='text-neutral-5 font-inter font-normal text-sm xl:text-xl'>
          {description}
        </span>
      </div>
    </div>
  );
};
