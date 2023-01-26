import React from "react";
import HomeScreen from "./Screens/HomeScreen.js";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen.js";
import "./App.css";
function App() {
  const user = null;
  return (
    <div className="app">
      {!user ? (
        <LoginScreen />
      ) : (
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
