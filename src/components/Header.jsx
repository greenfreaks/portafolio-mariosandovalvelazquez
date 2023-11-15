//Config
import {useTranslation} from "react-i18next";

const Header = () => {
    //Traducciones
    const [t, i18n] = useTranslation("global");
    return (
        <header className="header">
            <div className="header__banner">
                <div className="header__banner--logo">
                    <h1>{t("header.myName")}</h1>
                    <h2 className="greenTx">{t("header.myPosition")}</h2>
                    <p>{t("header.myPassion")}</p> <br />
                    <a href={t("header.btnLink")} target="_blank" class="lgBtn green whiteTx bold"><b>{t("header.btnText")}</b></a>
                </div>

                <div class="header__banner--text">
                    <p class="whiteTx">{t("header.textPart1")} <b class="greenTx">{t("header.textPart2")}</b> {t("header.textPart3")}</p>
                </div>
            </div>
        </header>
    )
}

export default Header;