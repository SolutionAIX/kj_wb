import { Button } from "../ui/button";

const BlogCard = () => {
    return (
        <>
            <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
                <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
                    <div className="order-1 sm:ml-6 xl:ml-0">
                        <h3 className="mb-1 font-semibold">
                            <span className="mb-1 block text-sm leading-6 text-indigo-500">Headless UI</span>
                            Completely unstyled, fully
                            accessible UI components
                        </h3>
                        <div className="prose prose-slate prose-sm text-slate-600 dark:text-slate-400">
                            <p>Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind
                                CSS.</p>
                        </div>
                        <Button
                            className="bg-indigo-500 shadow-lg text-white shadow-indigo-500/50 mt-6 hover:bg-indigo-600"
                            >Read more
                            <svg className="overflow-visible ml-3 text-slate-300 "
                                width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M0 0L3 3L0 6"></path>
                            </svg></Button>
                    </div>
                    <img src="https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg" alt="" className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640" />
                </li>
                <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
                    <div className="order-1 sm:ml-6 xl:ml-0">
                        <h3 className="mb-1 font-semibold">
                            <span className="mb-1 block text-sm leading-6 text-purple-500">Heroicons</span>Beautiful hand-crafted SVG
                            icons, by the makers of Tailwind CSS.
                        </h3>
                        <div className="prose prose-slate prose-sm text-slate-600 dark:text-slate-400" >
                            <p>A set of 450+ free MIT-licensed SVG icons. Available as basic SVG icons and via first-party React and
                                Vue libraries.</p>
                        </div><Button
                            className="bg-indigo-500 shadow-lg text-white shadow-indigo-500/50 mt-6 hover:bg-indigo-600"
                            >Read more
                            <svg className="overflow-visible ml-3 text-slate-300 "
                                width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M0 0L3 3L0 6"></path>
                            </svg></Button>
                    </div>
                    <img src="https://tailwindcss.com/_next/static/media/heroicons@75.4a558f35.jpg" alt="" className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640" />
                </li>
                <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
                    <div className="order-1 sm:ml-6 xl:ml-0">
                        <h3 className="mb-1 font-semibold">
                            <span className="mb-1 block text-sm leading-6 text-cyan-500">Hero Patterns</span>
                            Seamless SVG background
                            patterns by the makers of Tailwind CSS.
                        </h3>
                        <div className="prose prose-slate prose-sm text-slate-600 dark:text-slate-400">
                            <p>A collection of over 100 free MIT-licensed high-quality SVG patterns for you to use in your web
                                projects.</p>
                        </div><Button
                            className="bg-indigo-500 shadow-lg text-white shadow-indigo-500/50 mt-6 hover:bg-indigo-600"
                            >Read more
                            <svg className="overflow-visible ml-3 text-slate-300 "
                                width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M0 0L3 3L0 6"></path>
                            </svg></Button>
                    </div>
                    <img src="https://tailwindcss.com/_next/static/media/heropatterns@75.82a09697.jpg" alt="" className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640" />
                </li>
            </ul>
        </>
    );
}

export default BlogCard;