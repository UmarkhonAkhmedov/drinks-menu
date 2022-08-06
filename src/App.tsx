import React, { Suspense } from "react";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  return (
    <Suspense fallback={null}>
      <div className="">
        <div>
          <Header />
          <Main />
        </div>
      </div>
    </Suspense>
  );
}

export default App;
