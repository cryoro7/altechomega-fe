import { Outlet } from "react-router-dom";
import CustomProviders from "./components/CustomProviders";
import CustomNavbar from "./components/CustomNavbar";
import CustomFooter from "./components/CustomFooter";

function App() {
  return (
    <CustomProviders>
      <section className="min-h-screen">
        <CustomNavbar />

        <div>
          <Outlet />
        </div>

        <CustomFooter />
      </section>
    </CustomProviders>
  );
}

export default App;
