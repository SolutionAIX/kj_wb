import { RootState } from "@/lib/store/useAuth";
import { useSelector } from "react-redux";
import GuideContent from "./GuideContent";
import { useState, useEffect, useRef } from "react";
import { axiosPrivateInstance } from "@/lib/axios";
import LoadingPage from "../loading/LoadingPage";
import { useTranslation } from "react-i18next";

const Guide = () => {
    const { i18n, t } = useTranslation();
    const { user, isLoggedIn } = useSelector((state: RootState) => state.auth);
    const [contents, setContents] = useState([]);
    const [isActiveContent, setIsActiveContent] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const contentRef = useRef(null);

    const NAVBAR_HEIGHT = 70;  

    useEffect(() => {
        const fetchContents = async () => {
            try {
                const response = await axiosPrivateInstance.get(`${import.meta.env.VITE_REACT_APP_API_URL}/guide/contents/`);
                setContents(response.data);
                setLoading(false);
            } catch (error) {
                setError('Failed to load content.');
                setLoading(false);
            }
        };

        if (isLoggedIn && user) {
            fetchContents();
        }
    }, [isLoggedIn, user]);

    useEffect(() => {
        if (contentRef.current) {
            const contentTopPosition = contentRef.current.getBoundingClientRect().top + window.pageYOffset;
            const scrollToPosition = contentTopPosition - NAVBAR_HEIGHT;

            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth'
            });
        }
    }, [isActiveContent]);  // Trigger this effect whenever the active content changes

    const handleNextContent = () => {
        if (isActiveContent < contents.length - 1) {
            setIsActiveContent(isActiveContent + 1);
        }
    };

    const handlePrevContent = () => {
        if (isActiveContent > 0) {
            setIsActiveContent(isActiveContent - 1);
        }
    };

    if (!isLoggedIn || !user) {
        return <LoadingPage />;
    }

    if (loading) {
        return <LoadingPage />;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    const updateLanguageUrl = (url) => {
        const languagePrefix = i18n.language === 'en' ? 'en' : 'ru';
        return url.replace(/\/(en|ru)\//, `/${languagePrefix}/`);
    }

    return (
        <div className="mx-auto py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-4">
                <div className="lg:col-span-8 order-2 lg:order-1" ref={contentRef}>
                    {contents.length > 0 && (
                        <div>
                            <GuideContent contentUrl={updateLanguageUrl(contents[isActiveContent].url)} />
                            <div className="flex justify-between mt-4">
                                <button
                                    onClick={handlePrevContent}
                                    disabled={isActiveContent === 0}
                                    className={`px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded ${isActiveContent === 0 ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                                >
                                    {t('guide.previous')}
                                </button>
                                <button
                                    onClick={handleNextContent}
                                    disabled={isActiveContent === contents.length - 1}
                                    className={`px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded ${isActiveContent === contents.length - 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                                >
                                    {t('guide.next')}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                <div className="lg:col-span-4 order-1 lg:order-2">
                    <div className="border shadow-md rounded-lg md:p-6 p-2">
                        <div className="flex flex-col">
                            <h1 className="font-bold text-xl mb-4">Material Course</h1>
                            <hr className="my-6 border-t border-gray-300 dark:border-gray-700" />
                            {contents.map((item, index) => (
                                <div key={index} className="p-2 w-full cursor-pointer" onClick={() => setIsActiveContent(index)}>
                                    <div className={`${isActiveContent === index ? 'bg-gray-100 dark:bg-gray-800 dark:text-gray-300' : 'border'} rounded flex p-4 h-full items-center`}>
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                                            className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span className="font-medium">{item.title}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Guide;
