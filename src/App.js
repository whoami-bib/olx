import React,{useContext} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import LoginPage from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import './App.css';
import Post from './store/postContext';
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { useEffect } from 'react';
import { AuthContext, FirebaseContext } from './store/Context';

function App() {

  const{user,setUser}= useContext(AuthContext)
  const{firebase}= useContext(FirebaseContext)
  // const {Post} = useContext(Post)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  }, [])
  
  return (
    <div>
    <Post>
      <Router>
        <Route exact path='/'>
         <Home />
        </Route>
        <Route path='/signup'>
          <Signup/>
        </Route>
        <Route path='/login'>
          <LoginPage/>
        </Route>
        <Route path='/sell'>
          <Create/>
        </Route>
        <Route path='/view'>
          <View/>
        </Route>
      </Router>
    </Post>
    </div>
  );
}

export default App;
