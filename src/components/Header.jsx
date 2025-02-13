import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../App";
import { useTranslation } from "react-i18next";
import "../App.css";

function Header() {
  const [languages, setLanguages] = useState("en");
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (i18n.changeLanguage) {
      i18n.changeLanguage(languages);
    }
  }, [languages, i18n]);

  return (
    <div className="headers">
      <a href="#" className="logo">
        <h1>{t("Where in the world?")}</h1>
      </a>
      <select onChange={(e) => setLanguages(e.target.value)} value={languages}>
        <option value="en">English</option>
        <option value="uz">O'zbekcha</option>
        <option value="ru">Русский</option>
      </select>
      <p
        className={`themebtn ${theme === "light" ? "light-mode" : "dark-mode"}`}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? "Dark mode" : "Light mode"}
      </p>
    </div>
  );
}

export default Header;
