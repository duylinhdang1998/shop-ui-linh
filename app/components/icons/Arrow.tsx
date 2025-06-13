import React from 'react';

const ArrowIcon: React.FC<{ width?: number; height?: number; fill?: string }> = ({
  width = 24,
  height = 24,
  fill = '#666666',
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M17.5857 10.9999L14 7.41414C13.6094 7.02361 13.6094 6.39045 14 5.99992C14.3905 5.6094 15.0236 5.6094 15.4142 5.99992L20.7071 11.2928C21.0976 11.6833 21.0976 12.3165 20.7071 12.707L15.4142 17.9999C15.0236 18.3904 14.3905 18.3904 14 17.9999C13.6094 17.6094 13.6094 16.9762 14 16.5857L17.5858 12.9999H5C4.44771 12.9999 4 12.5522 4 11.9999C4 11.4476 4.44772 10.9999 5 10.9999H17.5857Z" fill="#666666"/>
</svg>
  );
};

export default ArrowIcon;