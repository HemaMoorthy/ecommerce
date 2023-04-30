import Cart from './Components/Cart';
import DashBoard from './Components/DashBoard';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route,Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
      <Route path = "/dashboard" element = {<DashBoard/>} />
      <Route path = "/addtocart" element = {<Cart/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
