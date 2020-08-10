import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import "./App.scss";

function App() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [language, setLanguage] = useState("en");
  const [isCustom, setIsCustom] = useState(false);

  const i18n = isCustom
    ? {
        pt_br: {
          "Type something": "OOHHH JUDITEEEEEEEE",
          "Paint format": "Pintar tudo de AZUL"
        },
      }
    : undefined;

  const config = {
    readonly: false,
    minHeight: 500,
    language: language,
    i18n: i18n,
  };

  return (
    <>
      <div className="languages">
        <div className="stv-radio-buttons-wrapper">
          <input
            type="radio"
            className="stv-radio-button"
            name="radioButtonTest"
            value="en"
            id="button1"
            checked={language === "en"}
            onChange={() => {}}
            onClick={() => {
              setLanguage("en");
              setIsCustom(false);
            }}
          />
          <label htmlFor="button1">English</label>
          <input
            type="radio"
            className="stv-radio-button"
            name="radioButtonTest"
            value="pt_br"
            id="button2"
            checked={language === "pt_br" && !isCustom}
            onChange={() => {}}
            onClick={() => {
              setLanguage("pt_br");
              setIsCustom(false);
            }}
          />
          <label htmlFor="button2">Portugues Brasileiro</label>
          <input
            type="radio"
            className="stv-radio-button"
            name="radioButtonTest"
            value="es"
            id="button3"
            checked={language === "es"}
            onChange={() => {}}
            onClick={() => {
              setLanguage("es");
              setIsCustom(false);
            }}
          />
          <label htmlFor="button3">Español</label>
          <input
            type="radio"
            className="stv-radio-button"
            name="radioButtonTest"
            value="pt_br"
            id="button4"
            checked={language === "pt_br" && isCustom}
            onChange={() => {}}
            onClick={() => {
              setLanguage("pt_br");
              setIsCustom(true);
            }}
          />
          <label htmlFor="button4">Portugues Brasileiro - i18n</label>
        </div>
      </div>

      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => {}}
      />
    </>
  );
}

export default App;
