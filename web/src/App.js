import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';
import * as S from './styled'

//Pages
import AddClient from "./Pages/AddClient";
import ListClients from './Pages/ListClients';
import Login from './Pages/Login';


function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  function logoutHandler() {
   if(window.confirm('Você realmente deseja \'SAIR\' do sistema?')){
      localStorage.removeItem('token');
      setLoggedIn(false);
    }

  }

  return (
    <>

      <BrowserRouter>

        {loggedIn === false ? <Route> <Redirect to="/login" /></Route> : <S.Button onClick={logoutHandler}>Sair</S.Button>}
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
