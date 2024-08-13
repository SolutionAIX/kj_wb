import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BorderBeam } from "../auth/BorderBeam";

const Error = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div className="w-full px-16 md:px-0 h-[94vh] flex items-center justify-center">
            <div className="relative border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
                <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-800 dark:text-gray-200">
                    {t('error.404')}
                </p>
                <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-600 dark:text-gray-300 mt-4">
                    {t('error.page_not_found')}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-4 pb-4 border-b-2 border-gray-200 dark:border-gray-600 text-center">
                    {t('error.description')}
                </p>
                <Button onClick={() => navigate('/')} className="flex items-center space-x-2 px-4 py-2 mt-6 rounded transition duration-150" title={t('error.return_home')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                    </svg>
                    <span>{t('error.return_home')}</span>
                </Button>
                <BorderBeam />
            </div>
        </div>
    );
}

export default Error;
