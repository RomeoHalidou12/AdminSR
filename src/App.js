import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import LoginScreen  from './Components/LoginScreen/Login';
import RegisterScreen  from './Components/RegisterScreen/Register';
import Recovery from "./Components/Recovery/recovery";

function App() {
  return (
      <Router>
            <main>
                <Route path={"/"} component={Dashboard} exact />
                <Route path={"/dashboard"} component={Dashboard} exact />
                <Route path={"/login"} component={LoginScreen} exact />
                <Route path={"/register"} component={RegisterScreen} exact />
                <Route path={"/recovery"} component={Recovery} exact />
            </main>
      </Router>
  );
}

export default App;
