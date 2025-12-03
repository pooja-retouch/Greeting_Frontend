import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-6">
        <Landing />
      </div>
    </>
  );
}
