import React, { useState } from "react";
import Loader from "./components/Loader";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader onFinish={() => setLoading(false)} />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
    </>
  );
};

export default App;