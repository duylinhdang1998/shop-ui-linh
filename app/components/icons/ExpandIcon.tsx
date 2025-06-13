import React from 'react';

const ExpandIcon = ({ isExpanded }: { isExpanded: boolean }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-orange-500"
    >
        <circle cx="12" cy="12" r="10" />
        <line x1="8" y1="12" x2="16" y2="12" />
        {!isExpanded && <line x1="12" y1="8" x2="12" y2="16" />}
    </svg>
);

export default ExpandIcon;