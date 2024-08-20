// src/components/TopNavbar.js
import React, { useEffect, useState } from "react";
import "@theme-toggles/react/css/Classic.css"
import { Classic } from "@theme-toggles/react"
import { LanguageSelector } from "../language/language-selector";
import { SideBar } from "../right_sidebar/right-sidebar";
import UserBar from "./UserBar";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/useAuth";
import { Link, useLocation } from "react-router-dom";
import ThemeChanger from "./ThemeChanger";
import { useTranslation } from "react-i18next";

export default function TopNavbar() {
    const [openNav, setOpenNav] = useState(false);
    const { user, isLoggedIn } = useSelector((state: RootState) => state.auth);
    const location = useLocation();
    const { t } = useTranslation();
    const [pageTitle, setPageTitle] = useState('');

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 max-w-screen-xl items-center">
                    <div className="mr-4 hidden md:flex">
                        <Link className="mr-6 flex items-center space-x-2" to="/">
                            <span className="hidden font-bold sm:inline-block"><span className="text-gradient_indigo-purple ">K-Job</span></span>
                        </Link>
                    </div>
                    <SideBar />
                    <div className="flex flex-1 items-center justify-between space-x-2 sm:justify-end">
                        <div className="w-full flex-1 md:w-auto md:flex-none">

                        </div>
                        <div className="sm:mt-0 sm:col-span-5 sm:flex">
                            <LanguageSelector />
                        </div>
                        <div className="sm:mt-0 sm:col-span-5 sm:flex">
                            <ThemeChanger />
                        </div>
                        <nav className="flex items-center">
                            <UserBar user={user} isLoggedIn={isLoggedIn} />
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}
