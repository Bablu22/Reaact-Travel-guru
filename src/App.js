import './App.css';
import LogIn from './Componants/LogIn/LogIn';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SignUp from './Componants/SignUp/SignUp';
import Header from './Componants/Header/Header';
import AuthProvider from './Componants/Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Booking from './Componants/Booking/Booking';
import Home from './Componants/Home/Home';
import Destination from './Componants/Destination/Destination';
import Footer from './Componants/Footer/Footer';
import PageNotFound from './Componants/pageNotFound/PageNotFound';
import Contact from './Componants/Contact/Contact';


function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route  path="/login">
              <LogIn></LogIn>
            </Route>
            <Route  path="/signup">
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path="/booking">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/destination/:placeId">
              <Destination></Destination>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
