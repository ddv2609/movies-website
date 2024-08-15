import { Link } from "react-router-dom";

import { GrLanguage } from "react-icons/gr";

import styles from "./Utilities.module.css";
import Language from "../Language/Language";
import { useState } from "react";

function Utilities() {
  const [languageSelected, setLanguageSelected] = useState<string>(localStorage.getItem("language") || "VI");

  return (
    <div className={styles.utils}>
      <div className={styles.languages}>
        <Language
          languageSelected={languageSelected}
          setLanguageSelected={setLanguageSelected}
        >
          <div className={styles.languagesWrapper}>
            <GrLanguage />
            <span>{languageSelected}</span>
          </div>
        </Language>
      </div>

      <Link to={"/login"}>
        <div className={styles.login}>Login</div>
      </Link>
    </div>
  );
}

export default Utilities;
