import React, { useState } from 'react';

const PrivacyPolicyModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <span
                onClick={openModal}
                className="text-gray-700 dark:text-gray-200 underline"
            >
                Privacy Policy
            </span>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 ">
                    <div className="bg-black bg-opacity-50 absolute inset-0"></div>
                    <div className="bg-background w-11/12 md:w-1/2 lg:w-1/3 p-6 rounded-lg z-10 shadow-lg">
                        <div className='max-h-[400px] overflow-y-auto mb-4 text-start'>
                            <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-200">
                                <strong>Kjob:</strong> <a href='/'>solutionaix.com</a>
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-200">
                                This Privacy Policy explains how Kjob we collects, uses, and shares information about you when you visit our website kjob.solutionaix.com team.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-200">
                                <strong>1. Information We Collect</strong><br />
                                <strong>Personal Information:</strong> When you register on the Site, we collect personal information such as your name, email address, and payment information.<br />
                                <strong>Usage Data:</strong> We collect information about your interactions with the Site, such as IP address, browser type, and access times.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-200">
                                <strong>2. How We Use Your Information</strong><br />
                                To provide and maintain our services.<br />
                                To process payments and manage your account.<br />
                                To communicate with you, including sending promotional materials.<br />
                                To improve the Site and analyze how users interact with it.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-200">
                                <strong>3. Sharing Your Information</strong><br />
                                <strong>Service Providers:</strong> We may share your information with third-party service providers to facilitate our services (e.g., payment processors).<br />
                                <strong>Legal Requirements:</strong> We may disclose your information if required by law or to protect our rights.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-200">
                                <strong>4. Cookies and Tracking Technologies</strong><br />
                                We use cookies to collect information and improve our services. You can control the use of cookies through your browser settings.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-200">
                                <strong>5. Data Security</strong><br />
                                We take reasonable measures to protect your information from unauthorized access, loss, or misuse. However, no method of transmission over the Internet or electronic storage is 100% secure.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-200">
                                <strong>6. Your Rights</strong><br />
                                You have the right to access, correct, or delete your personal information. You may also opt-out of receiving promotional communications from us.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-200">
                                <strong>7. Children's Privacy</strong><br />
                                Our services are not directed to individuals under 18, and we do not knowingly collect personal information from children.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-200">
                                <strong>8. International Data Transfers</strong><br />
                                Your information may be transferred to and processed in countries other than your country of residence, including South Korea.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-200">
                                <strong>9. Changes to This Policy</strong><br />
                                We may update this Privacy Policy from time to time. Any changes will be posted on this page.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-200">
                                <strong>10. Contact Information</strong><br />
                                If you have any questions about this Privacy Policy, please contact us at <a className='font-bold underline' href='mailto:support@solutionaix.com'>support@solutionaix.com</a>.
                            </p>
                        </div>
                        <button
                            onClick={closeModal}
                            className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default PrivacyPolicyModal;
