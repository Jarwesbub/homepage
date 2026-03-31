import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage.tsx";
import { NavBar } from "./components/NavBar.tsx";
import { BioPage } from "./pages/BioPage.tsx";
import { ExperiencePage } from "./pages/ExperiencePage.tsx";
import { ProjectsPage } from "./pages/ProjectsPage.tsx";
import { ContactPage } from "./pages/ContactPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bio" element={<BioPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
