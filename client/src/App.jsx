import { useState } from "react";

import {
  Loader,
  Welcome,
  Services,
  Footer,
  Navbar,
  Transaction,
} from "./ components";
import "./App.css";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar></Navbar>
        <Welcome></Welcome>
      </div>
      <Services></Services>
      <Transaction></Transaction>
      <Footer></Footer>
    </div>
  );
};

export default App;
