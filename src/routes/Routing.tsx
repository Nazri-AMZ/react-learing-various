import { BrowserRouter, Route, Routes } from "react-router-dom";
import HookForm from "../pages/HookForm";
import Home from "../pages/Home";
import ReactQuery from "../pages/ReactQuery";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hook-form" element={<HookForm />} />
        <Route path="/react-query" element={<ReactQuery />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
