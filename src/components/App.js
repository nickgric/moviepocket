import { Routes, Route } from "react-router-dom";

import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import PocketPage from "../pages/PocketPage";
import UserPage from "../pages/UserPage";
import MoviePage from "../pages/MoviePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search/:slug/:id" element={<MoviePage />}></Route>
        <Route path="/pocket" element={<PocketPage />} />
        <Route path="/user" element={<UserPage />} />
      </Route>
    </Routes>
  );
}

export default App;
