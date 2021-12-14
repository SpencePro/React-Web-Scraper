import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './home';
import { History } from './history';
import { Header } from './header';
import { Error } from './error';
import { Login } from './login';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />}>
          </Route>
          <Route path='/login' element={<Login />}>
          </Route>
          <Route path='/history' element={<History />}>
          </Route>
          <Route path='*' element={<Error />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
