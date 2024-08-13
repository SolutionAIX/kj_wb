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
        <div className="h-[70vh] flex items-center justify-center">
            <div className="container mx-auto">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white text-center py-10 rounded-lg shadow-md relative">
                    <h1 className='font-bold text-4xl'>👋 {t('activation.hi')} - {user.name}</h1>
                    <h3 className="text-xl font-semibold mb-4">
                        {t('activation.description')}
                    </h3>
                    <div className="flex items-center justify-center space-x-2 mb-6">
                        <input
                            type="text"
                            id="cpnCode"
                            value={activationCode}
                            onChange={handleInputChange}
                            className="border-dashed border text-black px-4 py-2 rounded-l"
                            placeholder="Enter code"
                        />
                        <button
                            id="cpnBtn"
                            onClick={handleSubmit}
                            className="border border-white bg-white text-purple-600 px-4 py-2 rounded-r cursor-pointer"
                        >
                            {t('activation.button')}
                        </button>
                    </div>
                    {successMessage && <div className="text-green-500 mt-4">{successMessage}</div>}
                    {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>}
                    <div className="w-12 h-12 bg-white dark:bg-background rounded-full absolute top-1/2 transform -translate-y-1/2 left-0 -ml-6"></div>
                    <div className="w-12 h-12 bg-white dark:bg-background rounded-full absolute top-1/2 transform -translate-y-1/2 right-0 -mr-6"></div>
                </div>
            </div>
        </div>
    );
}

export default GuideActivation;
