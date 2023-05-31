import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NabBar from "./components/NabBar/NabBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Error404 from "./components/Error404";

function App() {
  // todo debe quedar dentro de div's o <>xxx</>
  return (
    <div className="pt-5">
      <BrowserRouter>
        <NabBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/*"} element={<Error404 />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;