import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Menu from "./components/common/Menu";
import AppRoutes from "./routes/AppRoutes";
import "./assets/css/form.css";
import "./assets/css/table.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
