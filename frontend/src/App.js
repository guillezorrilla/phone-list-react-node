import { Switch, withRouter, Route, Redirect } from 'react-router-dom';
import './App.css';
import PhoneDetailComponent from './Phones/pages/PhoneDetailComponent';
import PhoneListContainer from './Phones/pages/PhoneListContainer';

const App = (props) => {
  const routes = (
    <Switch>
      <Route path='/' exact>
        <PhoneListContainer />
      </Route>
      <Route path='/phones/:phoneId'>
        <PhoneDetailComponent />
      </Route>
      <Redirect to='/' />
    </Switch>
  );
  return <div className='App'>{routes}</div>;
};

export default withRouter(App);
