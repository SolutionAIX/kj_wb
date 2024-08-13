import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";

const languages = {
  en: { name: "English", flag: "/images/flags/US.svg" },
  ru: { name: "Russian", flag: "/images/flags/RU.svg" },
};

export function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem('i18nextLng', language);
  };

  const currentLanguage = languages[i18n.language] ? i18n.language : 'en';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center space-x-2 p-2 rounded">
          <img
            src={languages[currentLanguage].flag}
            alt={languages[currentLanguage].name}
            className="w-5 h-3"
          />
          <span>{languages[currentLanguage].name}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languages).map(([code, { name, flag }]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => changeLanguage(code)}
            className="flex items-center"
          >
            <img src={flag} alt={name} className="w-5 h-3 mr-2" /> {/* Flag icon */}
            <span>{name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
