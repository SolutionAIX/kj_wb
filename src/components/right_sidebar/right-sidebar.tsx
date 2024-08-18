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
                <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-bold transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded={isOpen ? "true" : "false"}
                    aria-controls="radix-:R96la:"
                    data-state={isOpen ? "open" : "closed"}
                >
                    <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4C2.22386 4 2 4.22386 2 4.5C2 4.77614 2.22386 5 2.5 5H12.5C12.7761 5 13 4.77614 13 4.5C13 4.22386 12.7761 4 12.5 4H2.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
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
