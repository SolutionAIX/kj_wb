import React, { useState } from 'react';

const TermsService = () => {
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
                className="text-gray-700 dark:text-gray-200 underline cursor-pointer"
            >
                Terms of Service
            </span>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-black bg-opacity-50 absolute inset-0" onClick={closeModal}></div>
                    <div className="bg-background w-11/12 md:w-1/2 lg:w-1/3 p-6 rounded-lg z-10 shadow-lg">
                        <div className="max-h-[400px] overflow-y-auto mb-4 text-start">
                            <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-200">
                                <strong>Effective Date:</strong> [Insert Date]
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-200">
                                Welcome to Kjob! By accessing or using our website located at <a href='http://kjob.solutionaix.com' className="font-bold underline">kjob.solutionaix.com</a> (the "Site"), you agree to be bound by these Terms of Service ("Terms"). Please read them carefully.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-200">
                                <strong>1. Acceptance of Terms</strong><br />
                                By using our services, you agree to comply with and be legally bound by the terms and conditions of these Terms. If you do not agree to these terms, you may not use our services.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-200">
                                <strong>2. Changes to Terms</strong><br />
                                We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on the Site. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-200">
                                <strong>3. Use of the Site</strong><br />
                                You must be at least 18 years old to use this Site. You agree to use the Site for lawful purposes only. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-200">
                                <strong>4. Registration and Accounts</strong><br />
                                To access certain features of the Site, you must register and create an account. You must provide accurate and complete information during the registration process. You are responsible for keeping your account information up-to-date.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-200">
                                <strong>5. Payments and Subscriptions</strong><br />
                                By purchasing access to our services, you agree to pay the stated price of 19,000 KRW. Payment is required before you gain full access to the Site. All payments are non-refundable unless otherwise stated.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-200">
                                <strong>6. Intellectual Property</strong><br />
                                All content on the Site, including text, graphics, logos, and software, is the property of Kjob or its licensors and is protected by international copyright laws. You may not reproduce, distribute, or create derivative works from any content on the Site without our express written consent.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-200">
                                <strong>7. User Content</strong><br />
                                You retain ownership of any content you post on the Site but grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute your content. You are solely responsible for any content you post, and you agree not to post any content that is unlawful, harmful, or infringing.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-200">
                                <strong>8. Termination</strong><br />
                                We reserve the right to terminate or suspend your account at any time for any reason, including but not limited to a violation of these Terms. Upon termination, your right to use the Site will immediately cease.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-200">
                                <strong>9. Disclaimers</strong><br />
                                The Site is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not guarantee that the Site will be error-free, secure, or available at all times.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-200">
                                <strong>10. Limitation of Liability</strong><br />
                                In no event shall Kjob or its affiliates be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of the Site.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-200">
                                <strong>11. Governing Law</strong><br />
                                These Terms are governed by and construed in accordance with the laws of South Korea.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-200">
                                <strong>12. Contact Information</strong><br />
                                If you have any questions about these Terms, please contact us at <a className='font-bold underline' href='mailto:support@solutionaix.com'>support@solutionaix.com</a>.
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

export default TermsService;
