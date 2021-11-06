import logo from "./logo.svg";
import "./App.css";
import TextForm from "./components/TextForm";
// import About from "./components/About";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Alert from "./components/alert";
let name = "Harry";
function App() {
  const [mode, setmode] = useState("light"); //tells wether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const toggleMode = (cls) => {
    removeClasses();
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  const removeClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
  };
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000); //alert will disappear after 2 seconds
  };
  return (
    <>
      <Navbar
        title="TextUtilities"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Router>
          <Switch>
            <Route exact path="/About">
              <About></About>
            </Route>
            <Route exact path="/">
            </Route>
            </Switch>
          </Router> */}
        <TextForm heading="Enter your text" mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
