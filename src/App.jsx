// import "./App.css";
import { useState } from "react";
import Header from "./components/header/Header";
import Home from "./components/main/Home";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(function () {
    const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
    return systemSettingDark;
  });

  return (
    <div className={`app${isDarkMode ? " dark" : ""}`}>
      <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <Home />
    </div>
  );
}

export default App;
