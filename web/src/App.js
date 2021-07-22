
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Pages
import AddClient from "./Pages/AddClient";
import ListClients from './Pages/ListClients';
import Login from './Pages/Login';

function App() {
  return (
    <>
        <BrowserRouter>
          <Switch>
              <Route path="/" exact component={ListClients} />
              <Route path="/add-user" exat component={AddClient} />
              <Route path="/login" exat component={Login} />
          </Switch>
        </BrowserRouter>
      
    </>
  );
}

export default App;
