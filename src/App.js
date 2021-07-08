import Container from 'react-bootstrap/Container';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Details from './pages/Details';

function App() {
  return (
    <Router>
      <Navigation />
      <Container>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/cart' component={Cart} />
          <Route path={`/details/:id`} component={Details} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
