import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import BaseRoutes from "./navigation/BaseRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { ClassNames } from "@emotion/react";

const App = () => {
  return (
    <>
      <Router>
        {/* <div> */}
          <NavBar />
        {/* </div> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
          }}
        >
          <BaseRoutes />
        </div>
      </Router>
    </>
  );
};

export default App;
