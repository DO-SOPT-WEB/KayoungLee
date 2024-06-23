// eslint-disable-next-line no-unused-vars
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./components/Common/Router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
