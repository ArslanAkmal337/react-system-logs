import React, { Fragment, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddlogModal from "./components/logs/AddlogModal";
import EditlogModal from "./components/logs/EditlogModel";
import AddtechModel from "./components/logs/AddtechModel";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  useEffect(() => {
    //Init MAterilize js
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddlogModal />
          <EditlogModal />
          <AddtechModel />
    
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
