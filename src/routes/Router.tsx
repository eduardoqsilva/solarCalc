import { Route, Routes } from "react-router-dom";
import { CoordinatesForm } from "../pages/CoordinatesForm";

export function Router() {
  return (
    <Routes>
      <Route path={'/'} element={<CoordinatesForm />} />
    </Routes>
  )
}