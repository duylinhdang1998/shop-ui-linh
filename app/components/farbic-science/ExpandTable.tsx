import React, { useState } from 'react';

const initialTableData = [
    {
        id: 1,
        benefit: 'Acne & Breakout Prevention',
        isExpanded: true,
        columns: {
            dreamey: {
                rating: 'Exceptional',
                description: 'Powerful antibacterial and moisture-wicking properties prevents clogged pores and reduces acne-causing bacteria by 200% compared to cotton.',
            },
            cotton: {
                rating: 'Low',
                description: 'Traps bacteria and moisture against skin, significantly increasing risk of breakouts and irritation.',
            },
            silk: {
                rating: 'Moderate',
                description: 'Offers some antibacterial benefits but retains moisture that can allow bacteria to multiply, making it less effective for acne-prone skin.',
            },
        },
        scienceInfo: {
            title: 'The Science Behind CloudThera',
            description: "The Hohenstein Institute's comprehensive 2018 clinical study on advanced cellulose fibers, which form the foundation of CloudThera's technology, demonstrates a remarkable ability to reduce bacterial growth by over 200% compared to cotton, scientifically supporting its effectiveness for acne-prone skin and prevention of breakouts.",
        }
    },
    {
        id: 2,
        benefit: 'Dry Skin & Redness Relief',
        isExpanded: false,
        columns: {
                dreamey: { rating: 'Exceptional', description: 'Description for Dry Skin & Redness Relief on Dreamey.' },
                cotton: { rating: 'Low', description: 'Description for Dry Skin & Redness Relief on Cotton.' },
                silk: { rating: 'Moderate', description: 'Description for Dry Skin & Redness Relief on Silk.' },
        },
        scienceInfo: null,
    },
    {
        id: 3,
        benefit: 'Wrinkle & Fine Line Prevention',
        isExpanded: false,
        columns: {
                dreamey: { rating: 'Exceptional', description: 'Description for Wrinkle & Fine Line Prevention on Dreamey.' },
                cotton: { rating: 'Low', description: 'Description for Wrinkle & Fine Line Prevention on Cotton.' },
                silk: { rating: 'Exceptional', description: 'Description for Wrinkle & Fine Line Prevention on Silk.' },
        },
        scienceInfo: null,
    },
    {
        id: 4,
        benefit: 'Prevents Allergies & Irritation',
        isExpanded: false,
        columns: {
                dreamey: { rating: 'Exceptional', description: 'Description for Prevents Allergies & Irritation on Dreamey.' },
                cotton: { rating: 'Low', description: 'Description for Prevents Allergies & Irritation on Cotton.' },
                silk: { rating: 'Exceptional', description: 'Description for Prevents Allergies & Irritation on Silk.' },
        },
        scienceInfo: null,
    },
];

const ToggleIcon = ({ isExpanded }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
        <circle cx="12" cy="12" r="10" />
        <line x1="8" y1="12" x2="16" y2="12" />
        {!isExpanded && <line x1="12" y1="8" x2="12" y2="16" />}
    </svg>
);

const RatingBadge = ({ rating }) => {
    const baseClasses = 'px-4 py-1 text-sm font-medium rounded-full inline-block';
    const styles = {
        Exceptional: 'bg-green-200 text-green-800',
        Moderate: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
        Low: 'bg-background-3 text-gray-800 border border-background-3',
    };
    return <span className={`${baseClasses} ${styles[rating] || styles.Low}`}>{rating}</span>;
};

const BenefitRow = ({ rowData, onToggle, index }) => {
    const { id, benefit, isExpanded, columns, scienceInfo } = rowData;
    const isEven = index % 2 === 0;

    return (
        <div className={`grid grid-cols-1 md:grid-cols-4 ${!isEven ? 'bg-slate-50/70' : 'bg-backgound-2'}`}>
            <div className="p-4 border-r border-background-3 ">
                <div className="flex items-center gap-3">
                    <button onClick={() => onToggle(id)}>
                        <ToggleIcon isExpanded={isExpanded} />
                    </button>
                    <h3 className="font-semibold text-gray-800">{benefit} ewew</h3>
                </div>
            </div>
            <div className="p-4 border-r border-background-3 border-b">
                <div className="text-center">
                    <RatingBadge rating={columns.dreamey.rating} />
                </div>
                {isExpanded && (
                    <div className="pt-6 ">
                        <p className="text-gray-600 text-sm">{columns.dreamey.description}</p>
                    </div>
                )}
            </div>
            <div className="p-4 border-r border-background-3  border-b">
                <div className="text-center">
                    <RatingBadge rating={columns.cotton.rating} />
                </div>
                {isExpanded && (
                    <div className="pt-6">
                        <p className="text-gray-600 text-sm">{columns.cotton.description}</p>
                    </div>
                )}
            </div>
            <div className="p-4 border-background-3 border-b">
                <div className="text-center">
                    <RatingBadge rating={columns.silk.rating} />
                </div>
                {isExpanded && (
                    <div className="pt-6">
                        <p className="text-gray-600 text-sm">{columns.silk.description}</p>
                    </div>
                )}
            </div>
            {isExpanded && scienceInfo && (
                <div className="md:col-start-2 md:col-span-4 p-4  border-l  border-background-3">
                        <div className="grid grid-cols-1 md:grid-cols-4">
                                <div className="md:col-start-1 md:col-span-3">
                                        <h4 className="font-bold text-gray-800 text-left mb-2">{scienceInfo.title}</h4>
                                        <p className="text-gray-600 text-sm text-left max-w-4xl mx-auto">{scienceInfo.description}</p>
                                </div>
                        </div>
                </div>
            )}
        </div>
    );
};

export default function App() {
    const [tableData, setTableData] = useState(initialTableData);

    const handleToggleRow = (id) => {
        setTableData(
            tableData.map((row) =>
                row.id === id ? { ...row, isExpanded: !row.isExpanded } : row
            )
        );
    };

    return (
        <div className="flex items-center justify-center font-sans">
            <div className="w-full max-w-6xl mx-auto bg-background-2 rounded-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-4 bg-background-2 sticky top-0 z-10 ">
                        <div className="p-4 border-r border-background-3">
                                <h2 className="font-bold text-lg text-gray-800">Research-Backed Benefits</h2>
                        </div>
                        <div className="p-4 border-r border-background-3 text-center">
                                <h2 className="font-bold text-lg text-gray-800">Dreamey's CloudThera</h2>
                        </div>
                        <div className="p-4 border-r border-background-3 text-center">
                                <h2 className="font-bold text-lg text-gray-800">Cotton</h2>
                        </div>
                        <div className="p-4 text-center">
                                <h2 className="font-bold text-lg text-gray-800">Silk</h2>
                        </div>
                </div>
                <div className=" border-background-3">
                    {tableData.map((row, index) => (
                        <div key={row.id} className="border-b border-background-3 last:border-b-0">
                                <BenefitRow rowData={row} onToggle={handleToggleRow} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
