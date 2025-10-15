import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { useAuth } from "@clerk/clerk-react";
import MainLayout from "@/layouts/main-layout";
import Test from "@/modules/test/test";

const AppRouter = () => {
  const data = useAuth();
  console.log(data);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Test />} />
          <Route
            path={"/apod"}
            element={<div className="min-h-[40vh]">APOd</div>}
          />
          <Route
            path={"/nasa"}
            element={<div className="min-h-[40vh]">NASA</div>}
          />
          <Route
            path={"/mars"}
            element={<div className="min-h-[40vh]">Mars</div>}
          />
          <Route
            path={"/eonet"}
            element={<div className="min-h-[40vh]">EONET</div>}
          />
          <Route path={"/*"} element={<Navigate to={"/"} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
