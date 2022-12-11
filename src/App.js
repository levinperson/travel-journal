import React from "react";
import "./App.css";
import Head from "./components/Head";
import Journals from "./components/Journals";
import data from "./data";

function App() {
  const dataMapped = data.map((item) => {
    return <Journals properties={item} />;
  });

  return (
    <div className="App">
      <Head />
      <div className="journals-container">{dataMapped}</div>
    </div>
  );
}

export default App;
