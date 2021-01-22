import React from "react";
import Routes from "./config/routes";
import { BrowserRouter } from "react-router-dom";

import "./styles/main.sass";
import Header from "./components/Header";
import Footer from "./components/Footer";

import GlobalListingProvider from './ContextProvider'

const App = () => (
  <>
    <BrowserRouter>
      <GlobalListingProvider>
        <Header />
        <Routes />
        <Footer />
      </GlobalListingProvider>
    </BrowserRouter>
  </>
);

export default App;