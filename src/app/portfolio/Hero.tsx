

import Typewriter from 'typewriter-effect';

export default function AboutMe() {
    return (
        <>
            <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0">
                {/* <div className="mx-auto max-w-screen-lg px-3 py-6 w-[23rem] bg-neutral-800 dark:bg-white text-white rounded-lg">
                    <h1 className="colorBlock">
                        <Typewriter
                            onInit={(typewriter) => {
                            typewriter.typeString('<strong>아녕하</strong>')
                                .deleteAll()
                                .typeString('<strong>안녕하세요 소프트웨어 개발자 알레셰르입니다 </strong>')
                                .callFunction(() => {
                                    console.log('All strings were deleted');
                                })
                                .pauseFor(10000)
                                .start();
                            }}
                        />
                    </h1>
                </div> */}

                <div className="mx-auto max-w-screen-lg px-3 py-6">
            
                    <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
                        <div className="shrink-0">
                            <img className="h-80 w-64" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1efc6775-832b-4a2e-83bd-80bc1ed3ab22%2FRectangle_22.png?id=93c94094-c7ce-4ce9-bca6-6dea8ef517cd&table=block&spaceId=24358ab9-93ac-48b3-b02f-edac6393697c&width=380&userId=f8a73603-60d4-4529-840a-2026bfbe8cd7&cache=v2" alt="image description"/>
                        </div>

                        <div className="">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    
                                    <tbody>
                                        <tr className="border-b border-gray-200 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-neutral-600">
                                                Email
                                            </th>
                                            <td className="">
                                                <a href="mailto:alisherka0151@gmail.com">alisherka0151@gmail.com</a>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-neutral-600">
                                                LinkedIn
                                            </th>
                                            <td className="">
                                            <a href="https://www.linkedin.com/in/alisherka7/">/in/alisherka7/</a>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-neutral-600">
                                                GitHub
                                            </th>
                                            <td className="">
                                            <a href="https://github.com/Alisherka7">https://github.com/Alisherka7</a>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-neutral-600">
                                                Tistory Blog
                                            </th>
                                            <td className="">
                                                <a href="https://alisher.tistory.com/">https://alisher.tistory.com/</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-neutral-600">
                                            Phone Number
                                            </th>
                                            <td className="">
                                            <a>010 9674 0151</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
