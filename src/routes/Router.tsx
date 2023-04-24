import { Route, Routes } from "react-router-dom";
import { CoordinatesForm } from "../pages/CoordinatesForm";
import { Error404 } from "../pages/Error";
import { Home } from "../pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path={'/'} element={<CoordinatesForm />} />
      <Route path={'/home/:lat/:long/:cons'} element={<Home />} />
      <Route path={'*'} element={<Error404/>} />
    </Routes>
  )
}