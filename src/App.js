import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from "./Page/Explore"
import Notifications from "./Page/Notifications"
import Massages from "./Page/Massages"
import Profile from "./Page/Profile"
import Premium from "./Page/Premium"
import More from "./Page/More"
// import Leftsidebar from './components/Leftsidebar';
// import Rightsidebar from './components/Rightsidebar';
import Login from './Page/Login';



function App() {
  return (
    <>
     
      <BrowserRouter>
      <Login/>
      {/* <Leftsidebar/> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/notifications' element={<Notifications />} />
          <Route path='/massages' element={< Massages />} />
          <Route path='/premium' element={<Premium />} />
          <Route path='/profile' render={() =>(
            <Profile>
              <Route path='profile' />
            </Profile>
          )} />
          <Route path='/more' element={< More />} />
        </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
