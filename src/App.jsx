import React from "react";
import ScrollToTop from "./Components/ScrollToTop";
import NavBar from "./Components/NavBar";
import Service from "./Components/Service";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Recommendation from "./Components/Recommendation";
import Classes from "./Styles/Footer.module.css";
import SingaporeTripPage from "./Components/SingaPore";
import "./Styles/Singapore.module.css";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/singapore",
    element: <SingaporeTripPage/>,
  },
]);

function App() {
  return (
    <div className={Classes.app}>
      <ScrollToTop />
      <NavBar />
      <Hero />
      <Service />
      <Recommendation />
      <Testimonials />
      <Footer />
      {/* <SingaporeTripPage/> */}

     
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
export default App;
