import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home/Home';
import Header from './pages/Home/Header/Header';
import Footer from './Footer/Footer';
import Contact from './Contact/Contact';
import Tours from './pages/Home/Tours/Tours';
import Notfound from './Notfound/Notfound';
import Login from './Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import MyBooking from './MyBooking/MyBooking';
import AddTour from './AddTour/AddTour';
import ManageBooking from './ManageBooking/ManageBooking';
import BookingPage from './BookingPage/BookingPage';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          
          <Route exact path="/contact">
            <Contact></Contact>
         </Route>
          <Route exact path="/tours">
            <Tours></Tours>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/bookingpage/:tourId">
            <BookingPage></BookingPage>
          </PrivateRoute>

          <PrivateRoute exact path="/mybook">
            <MyBooking></MyBooking>
          </PrivateRoute>
          <PrivateRoute exact path="/addtour">
            <AddTour></AddTour>
          </PrivateRoute>
          <PrivateRoute exact path="/managebooking">
            <ManageBooking></ManageBooking>
          </PrivateRoute>


          {/* ****notfound** */}
          <Route exact path="*">
            <Notfound></Notfound>
          </Route>
          {/* ****notfound** */}

        </Switch>
        <Footer></Footer>
      </BrowserRouter>
   
      </AuthProvider>

  );
}

export default App;
