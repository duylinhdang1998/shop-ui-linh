import React, { useState } from 'react';
import ArrowDown from '../icons/ArrowDown';

interface ExpandCollapseSectionProps {
    items: { question: string; answer: string }[];
}

const ExpandCollapseSection: React.FC<ExpandCollapseSectionProps> = ({ items }) => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
        if (event.key === 'Enter' || event.key === ' ') {
            toggleExpand(index);
        }
    };

    return (
        <div className="w-full mt-6">
            <div className="">
                <ul className="py-4">
                    {items.map((item, index) => {
                        const isExpanded = expandedIndex === index;

                        return (
                            <li
                                key={index}
                                className={`mb-4 ${index !== items.length - 1 ? 'border-b border-neutral-0' : ''}`}
                            >
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => toggleExpand(index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                >
                                    <span className="font-satoshi font-medium text-[24px] leading-[32px] tracking-normal">
                                        {item.question}
                                    </span>
                                    <ArrowDown
                                        className={`cursor-pointer transform transition-transform`}
                                    />
                                </div>
                                {isExpanded && (
                                    <div className="font-satoshi px-3 pr-6 font-medium text-[18px] leading-[32px] tracking-normal">
                                        <span>{item.answer}</span>
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default ExpandCollapseSection;
