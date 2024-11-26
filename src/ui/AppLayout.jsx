import { Outlet } from "react-router-dom";
import { useState } from "react";

import Header from "../components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLinks from "../components/SocialLinks";

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
      <SocialLinks />
      <ToastContainer />
    </div>
  );
}

export default AppLayout;
