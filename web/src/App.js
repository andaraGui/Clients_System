
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';

//Pages
import AddClient from "./Pages/AddClient";
import ListClients from './Pages/ListClients';
import Login from './Pages/Login';


function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  function logoutHandler(){
    localStorage.removeItem('token');
    setLoggedIn(false);
  }

  return (
    <>

      <BrowserRouter>

        {loggedIn === false ?  <Route> <Redirect to="/login" /></Route>  : <button onClick={logoutHandler}>Logout</button>}
        <Switch>
          
          <Route path="/" exact component={ListClients} />
          <Route path="/add-user" exat component={AddClient} />
          <Route path="/login" exat component={Login}><Login setLoggedIn={setLoggedIn} loggedIn={loggedIn} /> </Route>
        </Switch>
      </BrowserRouter>

    </>
  );
}

export default App;
