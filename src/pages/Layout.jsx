import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs"; // ajuste o caminho
import Navmenu from "../components/Navmenu";
import Footer from "../components/Footer"
import BotaoWpp from "../components/BotaoWpp";

export default function Layout() {
  return (
    <>
      <Navmenu />
      <div className=" w-full md:w-[90vw] mx-auto p-2">
        <Breadcrumbs />
        <Outlet /> {/* páginas entram aqui */}
      </div>
      <Footer />
      <BotaoWpp />
    </>
  );
}
