import "./styles/App.css";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./pages/About";

function App() {
  return <BrowserRouter>
  <Route path="/pages/About.jsx">
    <About/>
  </Route>
  </BrowserRouter>;
}

export default App;
