import './App.scss';
import MyComponents from "./Examples/MyComponents";
import TodoApps from './TodoApps/TodoApps';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './TodoApps/Home';
import ListUser from './User/ListUser';
import UserDetail from './User/UserDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Switch>
            <Route path="/job">
              <MyComponents />
            </Route>
            <Route path="/todo">
              <TodoApps />
            </Route>
            <Route path="/user/:id">
              <UserDetail />
            </Route>
            <Route path="/user">
              <ListUser />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </Router>

  );
}

export default App;
