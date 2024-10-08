import { BorderBeam } from '@/app/auth/BorderBeam';
import GridPattern from '@/components/magicui/grid-pattern';
import Meteors from '@/components/magicui/meteors';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

function PriceCard() {
    const { t } = useTranslation();

    return (
        <section className="bg_pattern_blur">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
                <div className='h-[100px]'></div>
                <div className="p-2 md:p-10">
                    <div className="relative max-w-7xl mx-auto">
                        <div className="relative max-w-lg mx-auto rounded-xl shadow-lg overflow-hidden lg:max-w-none lg:flex">
                            <div className="relative flex-1 px-6 py-8 lg:p-12 bg-black ">
                                <h3 className="text-2xl font-extrabold text-white sm:text-3xl">{t('pricing.basic_plan.title')}</h3>
                                <div className="mt-8">
                                    <div className="flex items-center">
                                        <div className="flex-1 border-t-2 border-gray-200"></div>
                                    </div>
                                    <ul role="list" className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                                        <li className="flex items-start lg:col-span-1">
                                            <div className="flex-shrink-0"><svg className="h-5 w-5 text-green-400"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd"></path>
                                            </svg></div>
                                            <p className="ml-3 text-white">{t(`pricing.basic_plan.features.1`)}</p>
                                        </li>
                                        <li className="flex items-start lg:col-span-1">
                                            <div className="flex-shrink-0"><svg className="h-5 w-5 text-green-400"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd"></path>
                                            </svg></div>
                                            <p className="ml-3 text-white">{t(`pricing.basic_plan.features.2`)}</p>
                                        </li>
                                        <li className="flex items-start lg:col-span-1">
                                            <div className="flex-shrink-0"><svg className="h-5 w-5 text-green-400"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd"></path>
                                            </svg></div>
                                            <p className="ml-3 text-white">{t(`pricing.basic_plan.features.3`)}</p>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div
                                className="py-8 px-6 text-center lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12 bg-neutral-800">
                                <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-white">
                                    <span>₩19,000</span><span className="ml-3 text-xl font-medium text-gray-50">won</span>
                                </div>
                                <div className="mt-6">
                                    <div className="rounded-md shadow">
                                        <a href="/guide"
                                            className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600">{t('pricing.basic_plan.button')}</a>
                                    </div>
                                </div>
                            </div>
                            <BorderBeam />
                            <GridPattern
                                width={30}
                                height={30}
                                x={-1}
                                y={-1}
                                strokeDasharray={"4 2"}
                                className={cn(
                                    "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                                )}
                            />
                        </div>

                    </div>
                </div>
                {/* <div className="flex flex-wrap items-center justify-center max-w-4xl mx-auto gap-4 sm:gap-0">

                    <div className="w-full p-6 dark:bg-black-800 bg-white-500 backdrop-blur-md border dark:border-gray-700 border-gray-200 rounded-lg sm:w-1/2 bg-opacity-20 sm:rounded-r-none sm:p-8">
                        <div className="mb-6">
                            <h3 className="text-2xl font-semibold jakarta dark:text-gray-100 text-gray-800 sm:text-4xl">
                                {t('pricing.basic_plan.title')}
                            </h3>
                        </div>
                        <div className="mb-4 space-x-2">
                            <span className="text-4xl font-bold dark:text-gray-100 text-gray-600">
                                {t('pricing.basic_plan.price')}
                            </span>
                        </div>
                        <ul className="mb-6 space-y-2 text-gray-300">
                            {[1, 2, 3].map(index => (
                                <li key={index} className="flex items-center gap-1.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="dark:text-gray-100 text-gray-600">
                                        {t(`pricing.basic_plan.features.${index}`)}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <a href="#" className="block px-8 py-3 text-sm font-semibold text-center transition duration-100 dark:bg-white bg-black rounded-lg outline-none bg-opacity-10 hover:bg-opacity-20 md:text-base text-gray-600">
                            {t('pricing.basic_plan.button')}
                        </a>
                    </div>

                    <div className="w-full p-6 rounded-lg shadow-xl sm:w-1/2 bg-gradient-to-br from-cyan-500 to-blue-600 sm:p-8">
                        <div className="flex flex-col items-start justify-between gap-4 mb-6 lg:flex-row">
                            <div>
                                <h3 className="text-2xl font-semibold text-white jakarta sm:text-4xl">
                                    {t('pricing.premium_plan.title')}
                                </h3>
                            </div>
                        </div>
                        <div className="mb-4 space-x-2">
                            <span className="text-4xl font-bold text-white">
                                {t('pricing.premium_plan.price')}
                            </span>
                            <span className="text-xl text-indigo-100 line-through">
                                {t('pricing.premium_plan.old_price')}
                            </span>
                        </div>
                        <ul className="mb-6 space-y-2 text-indigo-100">
                            {[1, 2, 3, 4].map(index => (
                                <li key={index} className="flex items-center gap-1.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>
                                        {t(`pricing.premium_plan.features.${index}`)}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <BorderBeam/>
                        <a href="#" className="block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-white rounded-lg outline-none bg-opacity-20 hover:bg-opacity-30 md:text-base">
                            {t('pricing.premium_plan.button')}
                        </a>
                        
                    </div>
                </div> */}
            </div>
        </section>
    );
}

export default PriceCard;
