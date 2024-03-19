import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";

import Navigation from "./components/Navigation";

const App = () => {
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    getStore();
    return () => {};
  }, []);

  async function getStore() {
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();
  }

  return (
    <>
      <Navigation />

      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={route.element}
              exact
            />
          );
        })}
      </Routes>
    </>
  );
};

export default App;
