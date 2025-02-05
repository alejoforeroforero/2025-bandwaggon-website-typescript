import MainHeader from "@/components/Navigation/MainHeader";
import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "@/components/Navigation/Footer";

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
