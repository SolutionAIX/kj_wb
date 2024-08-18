import React, { useState } from 'react';
import confetti from "canvas-confetti";
import { useSelector } from 'react-redux';
import LoadingPage from '../loading/LoadingPage';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { axiosPrivateInstance } from '@/lib/axios';
import { RootState } from '@/lib/store/useAuth';

function GuideActivation() {
    const [activationCode, setActivationCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [showConfetti, setShowConfetti] = useState(false);
    const { t } = useTranslation();
    const { user, isLoggedIn } = useSelector((state: RootState) => state.auth);


    const handleInputChange = (event) => {
        setActivationCode(event.target.value);
    };

    const handleSubmit = async () => {
        setErrorMessage('');
        setSuccessMessage('');
        if (activationCode == '') {
            setErrorMessage(t('activation.empty_field'));
        } else {
            try {
                const response = await axiosPrivateInstance.post(
                    `${import.meta.env.VITE_REACT_APP_API_URL}/guide/activate-subscription/`,
                    { code: activationCode }
                );

                if (response.status === 200) {
                    setSuccessMessage('Subscription activated successfully!');
                    handleCallConfetti();
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                }
            } catch (error) {
                if (error.response && error.response.status === 400) {
                    setErrorMessage(error.response.data.error);
                } else {
                    setErrorMessage('An unexpected error occurred. Please try again.');
                }
            }
        }
    };

    const handleCallConfetti = () => {
        const end = Date.now() + 3 * 1000; // 3 seconds
        const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

        const frame = () => {
            if (Date.now() > end) return;

            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                startVelocity: 60,
                origin: { x: 0, y: 0.5 },
                colors: colors,
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                startVelocity: 60,
                origin: { x: 1, y: 0.5 },
                colors: colors,
            });

            requestAnimationFrame(frame);
        };

        frame();
    };

    if (!isLoggedIn || !user) {
        return <LoadingPage />;
    }

    return (
        <div className="items-center justify-center">
            <div className="container mx-auto flex flex-col items-center justify-center mt-16 md:mt-24">
                <ol className="relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400 mb-8 max-w-[630px]">
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                            <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                        </span>
                        <h3 className="font-medium leading-tight">{t('payment_process.step1.title')}</h3>
                        <p className="text-sm">{t('payment_process.step1.name')}</p>
                        <p className="text-sm">{t('payment_process.step1.bank')}</p>
                    </li>
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                            <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0-2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0-2Z" />
                            </svg>
                        </span>
                        <h3 className="font-medium leading-tight">{t('payment_process.step2.title')}</h3>
                        <p className="text-sm">{t('payment_process.step2.description')}</p>
                    </li>
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                            <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                            </svg>
                        </span>
                        <h3 className="font-medium leading-tight">{t('payment_process.step3.title')}</h3>
                        <p className="text-sm">{t('payment_process.step3.description')}</p>
                    </li>
                    <li className="ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                            <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                            </svg>
                        </span>
                        <h3 className="font-medium leading-tight pt-1">{t('payment_process.step4.title')}</h3>
                    </li>
                </ol>
            </div>
            <div className="container px-4">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white text-center py-10 rounded-lg shadow-md relative">
                    <h1 className="font-bold text-4xl mb-4">👋 {t('activation.hi')} - {user.name}</h1>
                    <h3 className="text-xl font-semibold mb-8">
                        {t('activation.description')}
                    </h3>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-2 mb-6 container">
                        <input
                            type="text"
                            id="cpnCode"
                            value={activationCode}
                            onChange={handleInputChange}
                            className="border-dashed border border-gray-300 text-black px-4 py-2 rounded w-full sm:w-auto"
                            placeholder="Enter code"
                        />
                        <button
                            id="cpnBtn"
                            onClick={handleSubmit}
                            className="border border-white bg-white text-purple-600 px-4 py-2 rounded cursor-pointer w-full sm:w-auto"
                        >
                            {t('activation.button')}
                        </button>
                    </div>
                    {successMessage && <div className="text-green-500 mt-4">{successMessage}</div>}
                    {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>}
                </div>
            </div>

        </div>
    );
}

export default GuideActivation;
