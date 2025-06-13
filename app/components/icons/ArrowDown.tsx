import React from 'react';

const ArrowDown = ({
  width = 40,
  height = 40,
  fill = '#666666',
  onClick,
  className,
}: {
  width?: number;
  height?: number;
  fill?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  className?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M20.0004 21.9533L27.0721 14.8816C27.7228 14.2309 28.778 14.2309 29.4287 14.8816C30.0795 15.5324 30.0795 16.5875 29.4287 17.2383L21.1789 25.4881C20.528 26.139 19.4728 26.139 18.8219 25.4881L10.5721 17.2383C9.92129 16.5875 9.92129 15.5324 10.5721 14.8816C11.2228 14.2309 12.278 14.2309 12.9287 14.8816L20.0004 21.9533Z"
        fill={fill}
      />
    </svg>
  );
};

export default ArrowDown;