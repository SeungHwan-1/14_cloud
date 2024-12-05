import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import MenuPage from "./pages/MenuPage";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path="menupage" element={<MenuPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
