import React, { useState } from 'react';
import ArrowDown from '../icons/ArrowDown';

function QAItem({ question, answer }: { question: string; answer: string }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="border-b border-neutral-0 w-full ">
            <div
                className="flex justify-between items-center cursor-pointer py-6"
                role="button"
                tabIndex={0}
                onClick={() => setIsExpanded(!isExpanded)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        setIsExpanded(!isExpanded);
                    }
                }}
            >
                <span className="font-satoshi font-medium text-[24px] lg:text-[32px] leading-[1.75rem] tracking-normal">{question}</span>
                <button
                    className=""
                >
                    <ArrowDown width={40} height={40}/>
                </button>
            </div>
            {isExpanded && <p className="font-satoshi font-medium text-[16px] lg:text-[24px] text-left leading-[3.5rem] tracking-normal pb-6 ">{answer}</p>}
        </div>
    );
}

export default function SectionQA() {
    const questionsAndAnswers = [
        { id: '1', question: 'How much does shipping cost?', answer: 'Shipping is free on all orders within the continental US.' },
        { id: '2', question: 'When will my order ship?', answer: 'Shipping is free on all orders within the continental US.' },
        { id: '3', question: "Do you offer returns or exchanges if I'm not satisfied?", answer: 'Shipping is free on all orders within the continental US.' },
        { id: '4', question: 'Can I order custom bedding?', answer: 'Shipping is free on all orders within the continental US.' },
        { id: '5', question: "What's the difference between CloudThera, silk, and cotton pillowcases?", answer: 'Shipping is free on all orders within the continental US.' },
        { id: '6', question: 'Is CloudThera suitable for sensitive or acne-prone skin?', answer: 'Shipping is free on all orders within the continental US.' },
        { id: '7', question: 'Will CloudThera help reduce wrinkles and fine lines?', answer: 'Shipping is free on all orders within the continental US.' },
        { id: '8', question: 'Is CloudThera hypoallergenic?', answer: 'Shipping is free on all orders within the continental US.' },
        { id: '9', question: 'Does CloudThera stay cool throughout the night?', answer: 'Shipping is free on all orders within the continental US.' },
        { id: '10', question: 'Is CloudThera sustainably and ethically produced?', answer: 'Shipping is free on all orders within the continental US.' },
        { id: '11', question: 'Can I machine-wash and dry?', answer: 'Shipping is free on all orders within the continental US.' },
    ];

    return (
        <section className="w-full flex justify-center mt-[64px] mb-[100px] rounded-lg">
            <div className="w-full flex flex-col lg:gap-y-[80px] gap-y-[40px] lg:px-[64px] px-[12px]">
                <span className="font-satoshi font-medium lg:text-[48px] text-[24px] leading-[3.5rem] tracking-normal text-center">
                    FREQUENTLY ASKED QUESTIONS
                </span>
                <div className="w-full flex flex-col">
                    {questionsAndAnswers.map((qa, index) => (
                        <QAItem key={qa.id} question={qa.question} answer={qa.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
}
