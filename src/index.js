import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, useHistory } from "react-router-dom";
import { Route, Switch, Routes } from "react-router-dom";
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
    <BrowserRouter>
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
