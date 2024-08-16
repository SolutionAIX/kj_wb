import { useTheme } from "@material-tailwind/react";
import { Tooltip } from "./Tooltip";
import { useTranslation } from 'react-i18next';

function ContentSection() {
    const theme = useTheme();
    const { t } = useTranslation();

    return (
        <>
            <section className="bggradient mt-[100px] mb-[100px]">
                <div className="md:max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                    {/* First Section - Kumushai */}
                    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-8 xl:gap-16">
                        <div className="text-gray-500 sm:text-lg dark:text-gray-400 lg:order-1">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{t('kumush.title')}</h2>
                            <p className="mb-8 font-light lg:text-xl">{t('kumush.description')}</p>

                            <ul role="list" className="pt-4 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                                <h1 className="text-gray-800 font-bold dark:text-white">{t('kumush.offer.title')}</h1>
                                {[1, 2, 3].map((index) => (
                                    <li key={index} className="flex space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">{t(`kumush.offer.${index}`)}</span>
                                    </li>
                                ))}
                            </ul>
                            <ul role="list" className="pt-4 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                                <h1 className="text-gray-800 font-bold dark:text-white">{t('kumush.facts.title')}</h1>
                                {[1, 2, 3, 4].map((index) => (
                                    <li key={index} className="flex space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">{t(`kumush.facts.${index}`)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <img className="w-full mb-4 rounded-lg lg:mb-0 lg:order-2 max-w-[540px]" src="./images/kumush.png" alt="feature image 2" />
                    </div>

                    {/* Second Section - Alisher */}
                    <div className="flex flex-col lg:grid lg:grid-cols-2 items-center gap-8 xl:gap-16">
                        <img className="w-full mb-4 rounded-lg lg:mb-0" src="./images/img2.png" alt="feature image 2" />
                        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{t('alisher.title')}</h2>
                            <p className="mb-8 font-light lg:text-xl">{t('alisher.description')}</p>

                            <ul role="list" className="pt-4 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                                <h1 className="text-gray-800 font-bold dark:text-white">{t('alisher.offer.title')}</h1>
                                {[1, 2, 3].map((index) => (
                                    <li key={index} className="flex space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">{t(`alisher.offer.${index}`)}</span>
                                    </li>
                                ))}
                            </ul>
                            <ul role="list" className="pt-4 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                                <h1 className="text-gray-800 font-bold dark:text-white">{t('alisher.facts.title')}</h1>
                                {[1, 2, 3, 4].map((index) => (
                                    <li key={index} className="flex space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">{t(`alisher.facts.${index}`)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContentSection;
