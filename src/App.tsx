// src/App.tsx
import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
      <div className="App">
        <Header />
        {/* Add top padding to account for the fixed header */}
        <main className="pt-20">
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
  );
};

export default App;
