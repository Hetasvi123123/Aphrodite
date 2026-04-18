import React, { useState } from "react";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import About from "./components/About";
import History from "./components/History";
import Celebration from "./components/Celebration";
import Gifts from "./components/Gifts";
import Footer from "./components/Footer";
import RakhiGallery from "./components/RakhiGallery";
import RakhiCategory from "./components/RakhiCategory";
import ContactOrder from "./components/ContactOrder";

const App = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader onFinish={() => setLoading(false)} />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <History />
      <RakhiCategory />
      <RakhiGallery />
      <Celebration />
      <Gifts />
      <ContactOrder />
      <Footer />
    </>
  );
};

export default App;