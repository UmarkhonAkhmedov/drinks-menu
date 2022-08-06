import React from "react";
import { useTranslation } from "react-i18next";
import LanguageToggler from "./Localization/LanguageToggler";

function Header() {
  const { t } = useTranslation(["Home"]);

  return (
    <div className="site-header">
      <div className="container">
        <div className="header">
          <h2>{t("menu")}</h2>
          <LanguageToggler />
        </div>
      </div>
    </div>
  );
}

export default Header;
