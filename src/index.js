import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Layout from "./pages/layout"; 
import Home from "./pages/home"; 
import Projects from "./pages/projects"; 
import './style/css/style.css';

export default function App() {   
  document.body.classList.add('light_theme')
  return (     
    <BrowserRouter>       
      <Routes>         
        <Route path="/portfolio" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />          
        </Route>
      </Routes>
    </BrowserRouter>   
  ); 
}
        
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
