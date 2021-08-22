import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route path="/" exact component={Home}/>
            
            <Route path="/users" exact component={UserList}/>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
