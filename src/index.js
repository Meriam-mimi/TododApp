import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

//component file
import TodoContainer from "./functionBased/components/TodoContainer";
import Navbar from "./functionBased/components/Navbar";
import About from "./functionBased/pages/About";
import SinglePage from "./functionBased/pages/SinglePage";
import NotMatch from "./functionBased/pages/NotMatch";
//stylesheet
import "./functionBased/App.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:slug" element={<SinglePage />} />

        <Route path="*" element={<NotMatch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
