
import './App.css';
import Navbar from './Components/Navigation/navbar';
import { Route, BrowserRouter ,Switch, Link} from 'react-router-dom'
import Home from './Components/User/Home';
import Signup from './Components/User/Signup';
import Login from './Components/User/Login';
import Welcome from './Components/User/Welcome';
import User from './Components/User/User';
import notfound from './404.jpg'
import EditUser from './Components/User/EditUser';

function Err() {
  return (
      <div className="mt-0">
          <Link to="/">
            <img alt="img not found" className="img-responsive w-100" src={notfound} />
          </Link>
      </div>
  )
}
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Switch>
          <Route exact path="/" component={Home} />
         <Route exact path="/Signup" component={Signup} />
         <Route exact path="/Login" component={Login} />
         <Route exact path="/User" component={User} />
         <Route exact path="/Welcome/:name" component={Welcome} />
         <Route exact path="/edit" component={EditUser} />
         {/* <Route  path="*" component={Error} /> */}
         <Route component={Err} />
         </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
