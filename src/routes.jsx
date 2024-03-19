import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import PageComponent from "./views/PageComponent";

const routes = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "About",
    path: "/about",
    element: <About />,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    element: <Contact />,
  },
  {
    path: "/shop/:category/",
    element: <PageComponent />,
  },
];

export default routes;
