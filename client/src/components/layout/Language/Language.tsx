import React, { useState } from "react";

import { Popconfirm, Select } from "antd";
import { LabeledValue } from "antd/es/select";

import styles from "./Language.module.css";

interface LanguageProps {
  children: React.ReactNode,
  languageSelected: string,
  setLanguageSelected: React.Dispatch<React.SetStateAction<string>>,
}

type OptionItem = {
  value: string | number;
  label: string;
};

function Language({ 
  children, 
  languageSelected, 
  setLanguageSelected 
}: LanguageProps) {
  const [options] = useState<OptionItem[]>([
    {
      value: "NB",
      label: "Na Uy (nb-NO)",
    },
    {
      value: "AR",
      label: "Ả Rập (ar-EG)",
    },
    {
      value: "EN-US",
      label: "Tiếng Anh (en-US)",
    },
    {
      value: "EN-AU",
      label: "Tiếng Anh (en-AU)",
    },
    {
      value: "VI",
      label: "Tiếng Việt (vi-VN)",
    },
  ]);

  const handleSelectLanguage = (value: string | number | LabeledValue) => {
    setLanguageSelected(value.toString());
  }

  const handleResetLanguage = () => {
    setLanguageSelected(localStorage.getItem("language") || "VI");
  }

  const handleReloadPage = () => {
    if (localStorage.getItem("language") !== languageSelected)
      localStorage.setItem("language", languageSelected || "VI");
  }
  
  return (
    <Popconfirm
      title={
        <span className={styles.languagePreferencesTitle}>
          Language Preferences
        </span>
      }
      icon={null}
      placement="bottom"
      okText="Reload"
      cancelText="Reset"
      description={
        <Select
          showSearch
          placeholder="Select a language"
          optionFilterProp="label"
          options={options}
          value={languageSelected}
          onSelect={handleSelectLanguage}
          style={{ width: "100%" }}
        />
      }
      onCancel={handleResetLanguage}
      onConfirm={handleReloadPage}
    >
      {children}
    </Popconfirm>
  );
}

export default Language;
