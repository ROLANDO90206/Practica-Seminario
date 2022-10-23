import { BrowserRouter } from "react-router-dom";
import RoutesLayoutLlave from "./routes/RoutesLayoutLlave";
// import NavbarLlave from "./routes/NavbarLlave";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <NavbarLlave/> */}
      <RoutesLayoutLlave/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
