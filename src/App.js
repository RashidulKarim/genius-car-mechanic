import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AddService from './Pages/AddService/AddService';
import Home from './Pages/Home/Home/Home';
import SingleService from './Pages/Home/SingleService/SingleService';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div id='home' className='page-container'>
      <div className='text-warp'>
      <AuthProvider>
      <BrowserRouter>
    <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/addService'>
          <AddService></AddService>
        </Route>
        <PrivateRoute path='/book/:id'>
          <SingleService></SingleService>
        </PrivateRoute>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </BrowserRouter>
    </AuthProvider>
    </div>
    <Footer></Footer>
    </div>
  );
}

export default App;
