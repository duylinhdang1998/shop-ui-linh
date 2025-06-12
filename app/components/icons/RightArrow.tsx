import React from "react";

interface RightArrowProps {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
  onClick?: () => void;
}

const RightArrow: React.FC<RightArrowProps> = ({
  width = 24,
  height = 24,
  fill = "#666666",
  className = "",
  onClick,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      onClick={onClick}
    >
      <path
        d="M13.061 12.1107L8.818 7.8677C8.42753 7.47723 8.42753 6.84416 8.81799 6.4537C9.20846 6.06323 9.84153 6.06323 10.232 6.4537L15.1819 11.4036C15.5724 11.7941 15.5724 12.4273 15.1819 12.8178L10.232 17.7677C9.84153 18.1582 9.20846 18.1582 8.818 17.7677C8.42753 17.3772 8.42753 16.7442 8.818 16.3537L13.061 12.1107Z"
        fill={fill}
      />
    </svg>
  );
};

export default RightArrow;