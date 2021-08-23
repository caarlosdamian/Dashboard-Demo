import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/users" exact component={UserList} />
            <Route path="/user/:userId" exact component={User} />
            <Route path="/newUser" exact component={NewUser} />
            <Route path="/products" exact component={ProductList} />
            <Route path="/product/:productsId" exact component={ProductList} />
            <Route path="/products/newProduct" exact component={ProductList} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
