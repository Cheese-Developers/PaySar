import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routes } from "./routes/routes.data";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";
import "./App.css";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

const App = () => {
  return (
    <MantineProvider>
      <Router>
        <div className="bg-primary min-h-screen flex flex-col">
          <Navbar />

          <Routes>
            {routes.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={route.name}
              />
            ))}
          </Routes>

          <Footer />
        </div>
      </Router>
    </MantineProvider>
  );
};

export default App;
