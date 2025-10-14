import Test from "@/pages/test";
import { BrowserRouter, Route, Routes } from "react-router";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
