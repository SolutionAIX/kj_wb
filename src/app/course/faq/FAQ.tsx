import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function FAQ() {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: t('faq.questions.1.question'),
            answer: t('faq.questions.1.answer')
        },
        {
            question: t('faq.questions.2.question'),
            answer: t('faq.questions.2.answer')
        },
        {
            question: t('faq.questions.3.question'),
            answer: t('faq.questions.3.answer')
        },
        {
            question: t('faq.questions.4.question'),
            answer: t('faq.questions.4.answer')
        },
        {
            question: t('faq.questions.5.question'),
            answer: t('faq.questions.5.answer')
        },
        {
            question: t('faq.questions.6.question'),
            answer: t('faq.questions.6.answer')
        },
        {
            question: t('faq.questions.7.question'),
            answer: t('faq.questions.7.answer')
        }
    ];

    return (
        <section className="py-24 ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 dark:text-gray-100 leading-[3.25rem]">
                        {t('faq.title')}
                    </h2>
                </div>
                <div className="accordion-group">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`accordion border border-solid border-gray-300 dark:border-gray-700 p-4 rounded-xl transition duration-200 mb-8 lg:p-4 ${activeIndex === index ? 'bg-indigo-50 dark:bg-indigo-900 border-indigo-600' : 'dark:bg-gray-800 dark:border-gray-700'
                                }`}
                        >
                            <button
                                className={`accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 dark:text-gray-100 w-full transition duration-200 hover:text-indigo-600 dark:hover:text-indigo-400 ${activeIndex === index ? 'font-medium text-indigo-600 dark:text-indigo-400' : ''
                                    }`}
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={activeIndex === index}
                            >
                                <h5>{faq.question}</h5>
                                <svg
                                    className={`w-6 h-6 transition duration-200 ${activeIndex === index ? 'hidden' : 'block'
                                        } group-hover:text-indigo-600 dark:group-hover:text-indigo-400`}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6 12H18M12 18V6"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                                <svg
                                    className={`w-6 h-6 transition duration-200 ${activeIndex === index ? 'block' : 'hidden'
                                        } group-hover:text-indigo-600 dark:group-hover:text-indigo-400`}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6 12H18"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </button>
                            <div
                                className={`accordion-content w-full overflow-hidden pr-4 transition-max-height duration-200 ease-in-out ${activeIndex === index ? 'max-h-screen' : 'max-h-0'
                                    }`}
                                aria-labelledby={`basic-heading-${index}`}
                            >
                                <p className="text-base text-gray-900 dark:text-gray-100 font-normal leading-6">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
