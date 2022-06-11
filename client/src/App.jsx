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
import { TransactionProvider } from "./context/Transaction.context";

const App = () => {
  return (
    <TransactionProvider>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar></Navbar>
          <Welcome></Welcome>
        </div>
        <Services></Services>
        <Transaction></Transaction>
        <Footer></Footer>
      </div>
    </TransactionProvider>
  );
};

export default App;
