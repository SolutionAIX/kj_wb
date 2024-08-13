import { RootState } from "@/lib/store/useAuth";
import { useSelector } from "react-redux";
import GuideContent from "./GuideContent";
import { useState, useEffect } from "react";
import { axiosPrivateInstance } from "@/lib/axios";
import LoadingPage from "../loading/LoadingPage";
import { useTranslation } from "react-i18next";

const Guide = () => {
    const { i18n } = useTranslation();
    const { user, isLoggedIn } = useSelector((state: RootState) => state.auth);
    const [contents, setContents] = useState([]);
    const [isActiveContent, setIsActiveContent] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

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

    const handleChangeContent = (index) => {
        setIsActiveContent(index);
    }

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
                <div className="lg:col-span-8">
                    {contents.length > 0 && (
                        <GuideContent contentUrl={updateLanguageUrl(contents[isActiveContent].url)} />
                    )}
                </div>
                <div className="lg:col-span-4">
                    <div className="border shadow-md rounded-lg p-6">
                        <div className="flex flex-col">
                            <h1 className="font-bold text-xl mb-4">Material Course</h1>
                            <hr className="my-6 border-t border-gray-300 dark:border-gray-700" />
                            {contents.map((item, index) => (
                                <div key={index} className="p-2 w-full cursor-pointer" onClick={() => handleChangeContent(index)}>
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
