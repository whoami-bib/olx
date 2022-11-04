import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';
function Header() {
  const history = useHistory()
  const {user} = useContext(AuthContext)
  const {firebase}= useContext(FirebaseContext)
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>{user?`Welcome ${user.displayName}`:<Link to='/login' style={{color:'black'}}>Login</Link>}</span>
          <hr />
        </div>
          <span onClick={()=>{firebase.auth().signOut().then(()=>{history.push('/login')})}}>{user && "Logout"}</span>

        <div className="sellMenu">
          <span onClick={()=>{user?history.push('/sell'):history.push('/login')}}>
          <SellButton></SellButton>
          </span>
         
      
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
