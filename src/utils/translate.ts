import en from "../assets/lang/en.json";
import id from "../assets/lang/id.json";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

const resources = {
  id: id,
  en: en
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false
  }
});

export const useCustomTranslation = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (code: string) => i18n.changeLanguage(code);
  const translateLanguage = (namespace: string) => {
    return t(namespace);
  };

  return {
    translateLanguage,
    changeLanguage
  };
};

// export const translateLanguage = (namespace: string) => i18n.t(namespace);
export default i18n;
