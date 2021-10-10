import './App.css';
import Form from './container/contact'
import Table1 from './components/Table/table1'
import EditContact from './components/Edit/Edit'
import DeleteContact from './components/Delete/deletes';
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div>
      <Switch>
          <Route path="/" exact component={Table1} />
          <Route path="/add" exact component={Form} />
          <Route path="/contacts/edit/:id/:names&&:Phnumbers" exact component={EditContact} />
          <Route path="/contacts/delete/:id" exact component={DeleteContact} />
      </Switch>
    </div>
  );
}

export default App;
