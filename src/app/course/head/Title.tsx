import React from "react";
import styles from "./bubble.module.css";
import { Trans, useTranslation } from "react-i18next";

const Title = () => {
  const { t } = useTranslation();
  const title = t(`head.gradient_text`);
  return (
    <h1 className="text-start text-4xl md:text-5xl xl:text-6xl font-medium text-transparent bg-clip-text bg-gradient-to-tr to-cyan-500 from-blue-600" style={{cursor: 'pointer'}}>
    {title.split("").map((child, idx) => (
      <span className={styles.hoverText} key={idx}>
        {child}
      </span>
    ))}
  </h1>
  );
};

export default Title;