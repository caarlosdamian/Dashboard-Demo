import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router } from "react-router-dom";
import "./app.css";
import Home from "./pages/home/Home";
function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <div className="container">
          <Sidebar />
          <Home />
        </div>
      </div>
    </Router>
  );
}

export default App;
