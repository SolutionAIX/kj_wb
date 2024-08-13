import { useTheme } from "@/components/theme-provider";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme(); // Get current theme and setter function from the useTheme hook
  const [isDark, setIsDark] = useState(theme === "dark");

  const handleThemeChange = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    setTheme(newTheme); // Update the theme using the setTheme function
  };

  return (
    <motion.button
      onClick={handleThemeChange}
      className="p-2 rounded-full flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <AnimatePresence exitBeforeEnter initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.25 }}
          >
            <FiMoon className="text-2xl text-blue-500" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.25 }}
          >
            <FiSun className="text-2xl text-yellow-500" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggleButton;
