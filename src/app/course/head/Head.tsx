import Lottie from 'lottie-react';
import animationJson from './main_animation.json';
import Title from './Title';
import { useTranslation } from 'react-i18next';
import ShinyButton from '@/components/magicui/shiny-button';

function Head() {
    const { t } = useTranslation();

    return (
        <>
            <section className="relative flex h-[90vh] w-full flex-col items-center justify-center overflow-hidden">
                <div className="grid z-10 max-w-screen-xl h-full items-center justify-center px-4 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {/* Badge Elements */}
                            <span id="badge-dismiss-default" className="inline-flex items-center px-2 py-1 text-sm font-medium text-green-800 bg-green-100 rounded dark:bg-green-900 dark:text-green-300">
                                #South Korea
                            </span>
                            <span id="badge-dismiss-default" className="inline-flex items-center px-2 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-300">
                                #Job for Foreigners
                            </span>
                            <span id="badge-dismiss-dark" className="inline-flex items-center px-2 py-1 text-sm font-medium text-gray-800 bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-300">
                                #Kotra
                            </span>
                            <span id="badge-dismiss-red" className="inline-flex items-center px-2 py-1 text-sm font-medium text-red-800 bg-red-100 rounded dark:bg-red-900 dark:text-red-300">
                                #Business
                            </span>
                            <span id="badge-dismiss-green" className="inline-flex items-center px-2 py-1 text-sm font-medium text-green-800 bg-green-100 rounded dark:bg-green-900 dark:text-green-300">
                                #Developer
                            </span>
                            <span id="badge-dismiss-yellow" className="inline-flex items-center px-2 py-1 text-sm font-medium text-yellow-800 bg-yellow-100 rounded dark:bg-yellow-900 dark:text-yellow-300">
                                #Marketing
                            </span>
                        </div>
                        <Title />
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white" style={{ cursor: 'pointer' }}>
                            {t('head.title')}
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400" style={{ cursor: 'pointer' }}>
                            {t('head.description')}
                        </p>
                        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                            <ShinyButton text={t('head.button')} className="text-8xl" />
                        </div>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <Lottie animationData={animationJson} loop={true} />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Head;
