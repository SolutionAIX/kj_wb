import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './roadmap.module.css';
import { useEffect, useState } from 'react';
import { useTheme } from '@/components/theme-provider';
import Particles from '@/components/magicui/particles';
import { GlobeDemo } from './GlobeDemo';
import BlurFade from '@/components/magicui/blur-fade';
import Globe from '@/components/magicui/globe';

function Roadmap() {
    const { theme } = useTheme();
    const { t } = useTranslation();
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(theme === "dark" ? "#ffffff" : "#000000");
    }, [theme]);
    const roadmapItems = [
        t('roadmap.1'),
        t('roadmap.2'),
        t('roadmap.3'),
        t('roadmap.4'),
        t('roadmap.5'),
        t('roadmap.6'),
        t('roadmap.7'),
        t('roadmap.8'),
        t('roadmap.9')
    ];

    return (
        <>
            <section id='roadmap'>
                <div className='relative bg_blurred_img'>
                    <div className='container mt-8 mb-24 bg_blurred_img z-10'>

                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-5xl p-6">
                            <BlurFade delay={0.25} inView>
                                <span className="block">

                                    <span className="text-transparent bg-clip-text bg-gradient-to-tr to-cyan-500 from-blue-600 pr-2">
                                        {t('roadmap.first_text')}<br></br>
                                    </span>
                                    {t('roadmap.second_text')}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-tr to-cyan-500 from-blue-600 pl-2">
                                        {t('head.south_korea')}
                                    </span>
                                </span>
                            </BlurFade>
                        </h1>
                    </div>
                    <div className="container z-10 max-w-6xl space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
                        {roadmapItems.map((title, index) => (
                            <motion.div
                                key={index}
                                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 dark:bg-slate-700 group-[.is-active]:bg-emerald-500 text-slate-500 dark:text-slate-400 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                        <path fillRule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                                    </svg>
                                </div>
                                <motion.div
                                    className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] backdrop-blur-md shadow-md shadow-blue-600/50 p-4 rounded border border-slate-200 dark:border-slate-600"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="font-bold text-slate-900 dark:text-slate-100">{title}</div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                    <Particles
                        className="absolute inset-0"
                        quantity={100}
                        ease={80}
                        color={color}
                        refresh
                    />
                </div >
            </section>
        </>
    );
}

export default Roadmap;
