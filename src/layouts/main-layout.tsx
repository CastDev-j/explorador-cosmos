import { Outlet } from "react-router";
import Header from "./components/header";
import Footer from "./components/footer";

const MainLayout = () => {
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <Header />
      <div className="sm:p-4 p-2">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default MainLayout;
