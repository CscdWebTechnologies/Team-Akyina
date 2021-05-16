import React from "react";
import Account from "./components/Account";
import BlueBanner from "./components/BlueBanner";
import CoinTable from "./components/CoinTable";
import Header from "./components/Header";
import SpaceBanner from "./components/SpaceBanner";
const App = () => {
  return (
    <div>
      <Header />
      <CoinTable />
      <BlueBanner />
      <Account />
      <SpaceBanner />
    </div>
  );
};

export default App;
