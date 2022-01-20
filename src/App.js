import "./App.css";
import { Route, Routes,BrowserRouter as Router } from "react-router-dom";
import Header from "./Containers/Header";
import ProductDetails from "./Containers/ProductDetails";
import ProductListing from "./Containers/ProductListing";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing/>} />
          <Route path="/product/:productId" element={<ProductDetails/>} />
          <Route>404 Not Found !!!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
