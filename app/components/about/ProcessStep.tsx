interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

export const ProcessStep = ({number, title, description}: ProcessStepProps) => {
  return (
    <div className="flex flex-col gap-y-4 justify-center items-center xl:justify-start xl:items-start">
      <div className="text-2xl text-center xl:text-left xl:text-[48px] font-medium text-white">
        {number}.
      </div>
      <h3 className="text-xl text-center xl:text-left xl:text-[32px] font-medium text-white">
        {title}
      </h3>
      <span className="font-inter text-center xl:text-left text-sm xl:text-xl text-white font-normal">
        {description}
      </span>
    </div>
  );
};
