
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Pages
import AddClient from "./Pages/AddClient";
import ListClients from './Pages/ListClients';

function App() {
  return (
    <>
        <BrowserRouter>
          <Switch>
              <Route path="/" exact component={ListClients} />
              <Route path="/add-user" exat component={AddClient} />
          </Switch>
        </BrowserRouter>
      
    </>
  );
}

export default App;
