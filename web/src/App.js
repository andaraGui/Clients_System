import { BrowserRouter, Switch, Route } from 'react-router-dom';
//PAGES
import ListUsers from './Pages/ListUsers';


function App() {


  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ListUsers} />
        {/* <Route path="/add-user" exact component={AddUser} /> */}
      </Switch>
    </BrowserRouter>

  );
}

export default App;
