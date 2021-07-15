import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as S from './styled';

//PAGES
import ListUsers from './Pages/ListUsers';
import EditUsers from './Pages/EditUser';
import AddUser from './Pages/EditUser';
import UserAPIController from './Services/userAPIController';


function App() {


  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ListUsers} />
        <Route path="/edit-user" exact component={EditUsers} />
        <Route path="/edit-user" exact component={AddUser} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
