import React from "react";

interface CancelIconProps {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
  onClick?: () => void;
}

const CancelIcon: React.FC<CancelIconProps> = ({
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
        d="M12 10.5862L15.5355 7.05071C15.926 6.66018 16.5592 6.66018 16.9497 7.05071C17.3402 7.44123 17.3402 8.07439 16.9497 8.46492L13.4142 12.0005L16.9497 15.536C17.3402 15.9265 17.3402 16.5597 16.9497 16.9502C16.5592 17.3407 15.926 17.3407 15.5355 16.9502L12 13.4147L8.46443 16.9502C8.07391 17.3407 7.44074 17.3407 7.05022 16.9502C6.65969 16.5597 6.65969 15.9265 7.05022 15.536L10.5858 12.0005L7.05022 8.46492C6.65969 8.0744 6.65969 7.44123 7.05022 7.05071C7.44074 6.66018 8.07391 6.66018 8.46443 7.05071L12 10.5862Z"
        fill={fill}
      />
    </svg>
  );
};

export default CancelIcon;