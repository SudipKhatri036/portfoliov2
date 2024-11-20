import { Outlet } from "react-router-dom";
import { useState } from "react";

import Header from "../components/Header";

function AppLayout() {
  const [isDarkMode, setIsDarkMode] = useState(function () {
    const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
    return systemSettingDark;
  });

  return (
    <div className={`app${isDarkMode ? " dark" : ""}`}>
      <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <main className="main container">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
