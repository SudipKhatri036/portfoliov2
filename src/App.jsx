import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
