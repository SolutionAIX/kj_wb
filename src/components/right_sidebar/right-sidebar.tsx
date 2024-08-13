import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { BackpackIcon, CodeSandboxLogoIcon, DashboardIcon } from "@radix-ui/react-icons";
import { LanguageSelector } from "../language/language-selector";

export function SideBar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (path) => location.pathname === path;

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <Sheet key={'left'} open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <button className=" inline-flex items-center justify-center whitespace-nowrap rounded-md font-bold transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden" type="button" aria-haspopup="dialog" aria-expanded={isOpen ? "true" : "false"} aria-controls="radix-:R96la:" data-state={isOpen ? "open" : "closed"}>
                    <span className="text-gradient_indigo-purple ">K-Job</span>
                </button>
            </SheetTrigger>
            <SheetContent side={'left'}>
                <Link to="/" className="flex items-center ps-2.5 mb-5" onClick={handleLinkClick}>
                    <span className="self-center text-xl text-gradient_indigo-purple font-bold ">K-Job</span>
                </Link>
                <div className="h-full py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link
                                to="/"
                                className={`flex items-center p-2 rounded-lg group ${isActive('/') ? 'text-foreground bg-gray-100 dark:bg-gray-700' : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                                onClick={handleLinkClick}
                            >
                                <CodeSandboxLogoIcon />
                                <span className="ms-3">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/guide"
                                className={`flex items-center p-2 rounded-lg group ${isActive('/guide') ? 'text-foreground bg-gray-100 dark:bg-gray-700' : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                                onClick={handleLinkClick}
                            >
                                <DashboardIcon />
                                <span className="flex-1 ms-3 whitespace-nowrap">My Guide</span>
                            </Link>
                        </li>
                        <li>
                            <LanguageSelector />
                        </li>
                    </ul>
                </div>
            </SheetContent>
        </Sheet>
    );
}
