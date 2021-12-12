import { StrictMode } from "react";
import ReactDOM from "react-dom";
// import {LoginContext} from './Contexts/LoginContext';

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <LoginContext.Provider value={}> */}
    <App />
    {/* </LoginContext.Provider> */}
  </StrictMode>,
  rootElement
);
