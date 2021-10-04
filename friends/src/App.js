import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import FriendsList from './components/FriendsList';
import FriendInfo from './components/FriendInfo';
import React, {useState} from 'react';
import PrivateRoute from './components/PrivateRoute';

function App() {

  const [ friends, setFriends ] = useState([])
  const [ showAddFriend, setShowAddFriend ] = useState(false)

  const logout = () => {

    localStorage.removeItem('token')
    window.location.href = '/login'

  }

  return (
    <div className="App">
      <header className="App-header">
        <Router>

          <NavBar
            logout={logout}
            showAddFriend={showAddFriend}
            setShowAddFriend={setShowAddFriend}
            />

          <Switch>

            <Route path= "/login">
              <Login />
            </Route>

            <PrivateRoute exact path ="/friends"
              component ={() => <FriendsList
              showAddFriend={showAddFriend}
              friends={friends}
              setFriends={setFriends}
              />}
            />

            <PrivateRoute
              path='/friends/:id'
              children={<FriendInfo friends={friends}/>}
            />
            
          </Switch>
          
        </Router>
          
            
      </header>
    </div>
  );
}

export default App;
