import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { useAuth } from "@clerk/clerk-react";
import MainLayout from "@/layouts/main-layout";
import IndexPage from "@/modules/index/index-page";
import ApodPage from "@/modules/apod/apod-page";
import MarsRoverPage from "@/modules/mars-rover/mars-rover-page";
import EonetPage from "@/modules/eonet/eonet-page";
import NasaImageVideoPage from "@/modules/nasa-image-video/pages/nasa-image-video-page";
import NasaImageVideoByIdPage from "@/modules/nasa-image-video/pages/nasa-image-video-by-id-page";

const AppRouter = () => {
  const { isSignedIn } = useAuth();

  console.log(isSignedIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<IndexPage />} />
          <Route path={"/apod"} element={<ApodPage />} />
          <Route path={"/nasa"} element={<NasaImageVideoPage />} />
          <Route path={"/nasa/:nasaId"} element={<NasaImageVideoByIdPage />} />
          <Route path={"/mars"} element={<MarsRoverPage />} />
          <Route path={"/eonet"} element={<EonetPage />} />
          <Route path={"/*"} element={<Navigate to={"/"} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
