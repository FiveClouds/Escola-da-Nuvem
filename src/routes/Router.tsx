import { Route, Routes, BrowserRouter } from "react-router-dom";
import App from "../App";
 

export default function FreeRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}