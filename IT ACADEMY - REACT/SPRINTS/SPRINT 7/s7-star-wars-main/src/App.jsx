import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout/Layout'
import StarshipList from './StarshipList.tsx'
import Home from './Home.tsx'


export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="starships" element={<StarshipList />} />
        </Route>
      </Routes>
    </BrowserRouter>
      {/* <main className="flex justify-center mb-6">
        <StarshipList />
      </main> */}
    </>
  );
}
