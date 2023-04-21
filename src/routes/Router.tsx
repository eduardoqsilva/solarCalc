import { Route, Routes } from "react-router-dom";
import { CoordinatesForm } from "../pages/CoordinatesForm";
import { Home } from "../pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path={'/'} element={<CoordinatesForm />} />
      <Route path={'/home'} element={<Home />} />
    </Routes>
  )
}