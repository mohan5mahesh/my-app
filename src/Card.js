import "./card.css";
import { Brands } from "./Brands";
import { Switch, Route, Link, useParams, Redirect } from "react-router-dom";
import { Users } from "./Users";
import { INITISL_USERS_LIST } from "./userlist";
import AppBar from "@material-ui/core/AppBar";
import { Game } from "./Game";
//nav bar function react router
function App() {
  return (
    <div>
      <AppBar position="static">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/brands">Brands</Link>
          <Link to="/users">User</Link>
          <Link to="/game">Game</Link>
        </nav>
      </AppBar>

      <Switch>
        <Route path="/brands">
          <Brands />
        </Route>
        <Route path="/vote">
          <Redirect to="/brands" />
        </Route>
        <Route path="/users/:userid">
          <Userdetails />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/game">
          <Game />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}
//page not found function
function NotFound() {
  return (
    <div>
      <h1>May be youare looking for some other page?</h1>
    </div>
  );
}
//to home
function Home() {
  return (
    <div>
      <h1>Welcome to Ourkart!!!</h1>
    </div>
  );
}
// user details
function Userdetails() {
  const { userid } = useParams();
  const user = INITISL_USERS_LIST.find((user) => user.id === parseInt(userid));

  return (
    <div>
      <h1>user details :{user.name}</h1>
    </div>
  );
}
export default App;
